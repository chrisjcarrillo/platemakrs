import {createShippingLabel, trackShipping, upsGenerateToken} from "../datasources/remote";
import clientPromise from "../../../lib/mongo/mongodb";
import {ObjectId} from "mongodb";

class UPSRepository {

    async authenticate() {
        const dbClient = await clientPromise;
        const db = dbClient.db();
        const systemCollection = db.collection('system');
        const token = await upsGenerateToken();
        await systemCollection.updateOne({name: 'upsToken'}, {$set: token}, {upsert: true});
        return token;
    }

    async createShippingLabel(orderData: any) {
        const dbClient = await clientPromise;
        const db = dbClient.db();
        const systemCollection = db.collection('system');
        let upsToken = await systemCollection.findOne({name: 'upsToken'});
        const expDate = new Date(parseInt(upsToken?.issued_at)).getTime() + parseInt(upsToken?.expire_in) * 1000;
        if (expDate <= new Date().getTime()) {
            await this.authenticate();
            upsToken = await systemCollection.findOne({name: 'upsToken'});
        }
        const shippingLabel = await createShippingLabel(upsToken?.access_token, orderData, 'FORWARD');
        const ordersCollection = db.collection('orders');
        await ordersCollection.updateOne({_id: new ObjectId(orderData.orderId)}, {$set: {shippingLabel: shippingLabel}});
        return shippingLabel;
    }

    async createReturnLabel(orderData: any) {
        const dbClient = await clientPromise;
        const db = dbClient.db();
        const systemCollection = db.collection('system');
        let upsToken = await systemCollection.findOne({name: 'upsToken'});
        const expDate = new Date(parseInt(upsToken?.issued_at)).getTime() + parseInt(upsToken?.expire_in);
        if (expDate <= new Date().getTime()) {
            await this.authenticate();
            upsToken = await systemCollection.findOne({name: 'upsToken'});
        }
        const shippingLabel = await createShippingLabel(upsToken?.access_token, orderData, 'RETURN');
        const ordersCollection = db.collection('orders');
        const shippingCollection = db.collection('shipping');
        await ordersCollection.updateOne({orderId: orderData.id.toString()}, {$set: {returnShippingLabel: shippingLabel}});
        await shippingCollection.insertOne({orderId: orderData.id.toString(), shippingData: shippingLabel?.ShipmentResponse?.ShipmentResults, type: 'RETURN'});

        return shippingLabel;
    }


    async trackShipping() {
        return await trackShipping();
    }
}

export default UPSRepository;
