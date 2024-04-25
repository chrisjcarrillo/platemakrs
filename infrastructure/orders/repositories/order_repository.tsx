import {getOrders} from "../datasources/remote";
import clientPromise from "../../../lib/mongo/mongodb";
import {getCustomTemplateFirebase, getLicensePlateFirebase} from "../../../lib/firebase/firebase";
import {ObjectId} from "mongodb";

interface LineItemNode {
    customAttributes: Array<{ key: string; value: string }>;
}

interface Order {
    id: string;
    createdAt: string;
    name: string;
    customer: any;
    displayFinancialStatus: string;
    lineItems: {
        edges: Array<{ node: LineItemNode }>;
    };
    currentTotalPriceSet?: {
        presentmentMoney: {
            amount: string;
        };
    };
    displayFulfillmentStatus: string;
}

class OrderRepository {
    async seedOrders(): Promise<void> {
        const dbClient = await clientPromise;
        const db = dbClient.db();
        const ordersCollection = db.collection('orders');
        const orders = await getOrders();

        for (const order of orders) {
            const lineItems = order.lineItems.edges.map((edge) => edge.node);
            const plateId = lineItems[0].customAttributes.find((attr) => attr.key === "Plate ID")?.value;
            const preview = lineItems[0].customAttributes.find((attr) => attr.key === "Preview")?.value || 'https://cdn.shopify.com/s/files/1/0747/7565/8797/files/option-1_1dd37e57-7e70-432e-8234-a9c172c25019_160x160.png?v=1692480801';
            let licencePlate;
            let customTemplate;
                if (plateId) {
                    console.log('PLATE ID', plateId);
                    licencePlate = await getLicensePlateFirebase(plateId);
                }
                if (licencePlate) {
                    customTemplate = await getCustomTemplateFirebase(licencePlate.customTemplateId);
                }

                const baseColor = lineItems[0]?.product?.title === "Add-on - Metallic Upgrade"
                    ? lineItems[0]?.variant?.title
                    : lineItems[0]?.product?.title === "Add-on - Color Match"
                        ? "Color Match - Ask Team"
                        : (
                            customTemplate?.backgroundSettings.color === '#ffffff' ||
                            customTemplate?.backgroundSettings?.stroke?.color === '#ffffff' ||
                            customTemplate?.state?.color === '#ffffff' ||
                            customTemplate?.state?.stroke?.color === '#ffffff' ||
                            customTemplate?.state?.glow?.color === '#ffffff' ||
                            customTemplate?.plateNumber?.color === '#ffffff' ||
                            customTemplate?.plateNumber?.stroke?.color === '#ffffff' ||
                            customTemplate?.bottomText?.color === '#ffffff' ||
                            customTemplate?.bottomText?.stroke?.color === '#ffffff' ||
                            customTemplate?.bottomText?.glow?.color === '#ffffff')
                              ? 'WHITE'
                                : 'SEALER';

                const finish = lineItems.find((item: any) => (!item.product?.title?.includes("Add-on")))?.variant?.title;

                const orderId = order.id.split("/").pop();
                const orderData = {
                    orderId,
                    createdAt: order.createdAt,
                    name: order.name,
                    customerName: order.customer?.displayName || order.billingAddress?.name,
                    customerEmail: order.customer?.email || order.email,
                    customerPhone: order.customer?.phone || order.billingAddress?.phone,
                    displayFinancialStatus: order.displayFinancialStatus,
                    displayFulfillmentStatus: order.displayFulfillmentStatus,
                    finish: finish,
                    baseColor: baseColor,
                    preview,
                    productionStatus: 'ORDER_PLACED',
                    plate: licencePlate || order.lineItems.edges[0].node,
                };
                await ordersCollection.insertOne(orderData);
        }
        console.log('ORDERRRRRRS', orders.length);
    }

    async getOrders(query: any, count: any = 50, cursor: any = 1) {
        const dbClient = await clientPromise;
        const db = dbClient.db();
        const ordersCollection = db.collection('orders');
        const filterQuery = {
            $or: [
                {
                    "name": {
                        $regex: query || '',
                        $options: 'i'
                    }
                },
                {
                    "plate.plateNumber": {
                        $regex: query || '',
                        $options: 'i'
                    }
                },
                {
                    "plate.state": {
                        $regex: query || '',
                        $options: 'i'
                    }
                },
                {
                    "customerName": {
                        $regex: query || '',
                        $options: 'i'
                    }
                },
                {
                    "customerEmail": {
                        $regex: query || '',
                        $options: 'i'
                    }
                },
                {
                    "customerPhone": {
                        $regex: query || '',
                        $options: 'i'
                    }
                },
            ]
        };

        const skip = (cursor - 1) * count;

        const orders = await ordersCollection.find(filterQuery).toArray();
        const indexOrders = orders.slice(skip, skip + count);
        console.log('ORDERS', orders.length);
        const response = {
            pages: Math.ceil(orders.length / count),
            pageIndex: parseInt(cursor, 10),
            orders: indexOrders,
        };
        return response;
    }

    async createLicensePlate(licencePlate: any) {
        const dbClient = await clientPromise;
        const db = dbClient.db();
        const plateCollection = db.collection('licensePlates');
        const customTemplateCollection = db.collection('customTemplates');
        const customTemplate = await customTemplateCollection.insertOne(licencePlate.customTemplate);
        const plate = await plateCollection.insertOne({...licencePlate.plate, customTemplateId: customTemplate.insertedId});
        return {plate, customTemplate};
    }

    async updateLicensePlate(licencePlateId: any, licencePlate: any) {
        let dbClient = await clientPromise;
        const db = dbClient.db();
        const plateCollection = db.collection('licensePlates');
        await plateCollection.updateOne({_id: new ObjectId(licencePlateId)}, {
            $set: licencePlate
        });
        return plateCollection.findOne({_id: new ObjectId(licencePlateId)});
    }

    async updateCustomTemplate(customTemplateId: any, customTemplate: any) {
        let dbClient = await clientPromise;
        const db = dbClient.db();
        const customTemplateCollection = db.collection('customTemplates');
        await customTemplateCollection.updateOne({_id: new ObjectId(customTemplateId)}, {
            $set: customTemplate
        });
        return customTemplateCollection.findOne({_id: new ObjectId(customTemplateId)});
    }

}

export default OrderRepository;
