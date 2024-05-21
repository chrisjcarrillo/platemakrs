import {createShippingLabel, trackShipping, upsGenerateToken} from "../datasources/remote";
import clientPromise from "../../../lib/mongo/mongodb";
import OrderRepository from "../../orders/repositories/order_repository";

class UPSRepository {

    async authenticate() {
        const dbClient = await clientPromise;
        const db = dbClient.db();
        const systemCollection = db.collection('system');
        const token = await upsGenerateToken();
        await systemCollection.updateOne({name: 'upsToken'}, {$set: token}, {upsert: true});
        return token;
    }

    async createShippingLabel(orderId: any, type: string) {
        const dbClient = await clientPromise;
        const db = dbClient.db();
        const systemCollection = db.collection('system');
        let upsToken = await systemCollection.findOne({name: 'upsToken'});
        const expDate = new Date(parseInt(upsToken?.issued_at)).getTime() + parseInt(upsToken?.expire_in) * 1000;
        if (expDate <= new Date().getTime()) {
            await this.authenticate();
            upsToken = await systemCollection.findOne({name: 'upsToken'});
        }
        const orderRepository = new OrderRepository();
        const orderData = await orderRepository.getOrderById(orderId);
        if (!orderData.order) {
            return {error: 'Order not found'};
        }
        const shippingLabel = await createShippingLabel(upsToken?.access_token, orderData.order, type);
        const ordersCollection = db.collection('orders');
        const shippingCollection = db.collection('shipping');
        const shipping = type === 'RETURN' ? {returnShippingLabel: shippingLabel, productionStatus: 'RETURN_LABEL_SENT'} : {shippingLabel: shippingLabel, productionStatus: 'ORDER_SHIPPED'};
        await ordersCollection.updateOne({orderId: orderId}, {$set: shipping});
        await shippingCollection.insertOne({orderId: orderData.id, shippingData: shippingLabel?.ShipmentResponse?.ShipmentResults, type: type});
        return shippingLabel;
    }

    async createReturnLabel(orderData: any) {
        const dbClient = await clientPromise;
        const db = dbClient.db();
        const systemCollection = db.collection('system');
        let upsToken = await systemCollection.findOne({name: 'upsToken'});
        const issuedDate = new Date(parseInt(upsToken?.issued_at)).getTime();
        const expDate = new Date(issuedDate + parseInt(upsToken?.expires_in) * 1000).getTime();
        if (expDate <= new Date().getTime()) {
            await this.authenticate();
            upsToken = await systemCollection.findOne({name: 'upsToken'});
        }
        const shippingLabel = await createShippingLabel(upsToken?.access_token, orderData, 'RETURN');
        const ordersCollection = db.collection('orders');
        const shippingCollection = db.collection('shipping');
        await ordersCollection.updateOne({orderId: orderData.id}, {$set: {returnShippingLabel: shippingLabel}});
        await shippingCollection.insertOne({orderId: orderData.id, shippingData: shippingLabel?.ShipmentResponse?.ShipmentResults, type: 'RETURN'});

        return shippingLabel;
    }


    async trackShipping(trackingNumber: string) {
        const dbClient = await clientPromise;
        const db = dbClient.db();
        const systemCollection = db.collection('system');
        let upsToken = await systemCollection.findOne({name: 'upsToken'});
        const issuedDate = new Date(parseInt(upsToken?.issued_at)).getTime();
        const expDate = new Date(issuedDate + parseInt(upsToken?.expires_in) * 1000).getTime();
        if (expDate <= new Date().getTime()) {
            await this.authenticate();
            upsToken = await systemCollection.findOne({name: 'upsToken'});
        }
        return await trackShipping(trackingNumber, upsToken?.access_token);
    }
}

export default UPSRepository;
