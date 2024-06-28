import {getOrderById, getOrders} from "../datasources/remote";
import clientPromise from "../../../lib/mongo/mongodb";
import {getCustomTemplateFirebase, getLicensePlateFirebase} from "../../../lib/firebase/firebase";
import {ObjectId} from "mongodb";

async function generateQRCode(url: any) {
    try {
        const QRCode = require('qrcode');
        console.log('LICENSE PLATE STRING', url);
        const qrDataUrl = await new Promise((resolve, reject) => {
            QRCode.toDataURL( `${url}`
                , (err: any, url: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(url);
                }
            });
        });
        const base64 = qrDataUrl.split(',')[1];
        return base64;
    } catch (error) {
        console.error('Error generating QR code:', error);
        return null;
    }
}

class OrderRepository {
    async seedOrders(): Promise<void> {
        const dbClient = await clientPromise;
        const db = dbClient.db();
        const ordersCollection = db.collection('orders');
        const orders = await getOrders();

        for (const order of orders) {
            const lineItems = order.lineItems.edges.map((edge) => edge.node);
            let plates = [];

            for (const lineItem of lineItems) {
                const plateIdAttribute = lineItem.customAttributes.find(attr => attr.key === 'Plate ID');
                const previewAttribute = lineItem.customAttributes.find(attr => attr.key === 'Preview');

                if (plateIdAttribute && previewAttribute) {
                    const plateId = plateIdAttribute.value;
                    const preview = previewAttribute.value;
                    let licencePlate;
                    let customTemplate;
                    let qrCode;
                    if (plateId) {
                        licencePlate = await getLicensePlateFirebase(plateId);
                        if (!licencePlate) {
                            licencePlate = await this.getLicensePlate(plateId);
                            console.log('LICENCE PLATE', licencePlate);
                            if (licencePlate){
                                customTemplate = await this.getCustomTemplate(licencePlate.customTemplateId);
                            }
                        } else {
                            customTemplate = await getCustomTemplateFirebase(licencePlate.customTemplateId);
                        }
                    }
                        const baseColor = lineItem?.product?.title === "Add-on - Metallic Upgrade"
                            ? lineItem?.variant?.title
                            : lineItem?.product?.title === "Add-on - Color Match"
                                ? "Color Match - Ask Team"
                                : (
                                    customTemplate?.backgroundSettings?.color === '#ffffff' ||
                                    customTemplate?.backgroundSettings?.stroke?.color === '#ffffff' ||
                                    customTemplate?.state?.color === '#ffffff' ||
                                    customTemplate?.state?.stroke?.color === '#ffffff' ||
                                    customTemplate?.state?.glow?.color === '#ffffff' ||
                                    customTemplate?.plateNumber?.color === '#ffffff' ||
                                    customTemplate?.plateNumber?.stroke?.color === '#ffffff' ||
                                    (customTemplate?.bottomTextEnabled && customTemplate?.bottomText?.color === '#ffffff') ||
                                    (customTemplate?.bottomTextEnabled && customTemplate?.bottomText?.stroke?.color === '#ffffff') ||
                                    (customTemplate?.bottomTextEnabled && customTemplate?.bottomText?.glow?.color === '#ffffff')
                                )
                                      ? 'WHITE'
                                        : 'SEALER';

                        const finish = lineItems.find((item: any) => (!item.product?.title?.includes("Add-on")))?.variant?.title;

                    plates.push({plateId: plateId, plateData: licencePlate, customTemplateData: customTemplate, baseColor, finish, preview, productionStatus: 'ORDER_PLACED'});
                }
            }
                const orderId = parseInt(order.id.split("/").pop());
                const orderData = {
                    orderId,
                    createdAt: order.createdAt,
                    name: order.name,
                    customerName: order.customer?.displayName || order.billingAddress?.name,
                    customerEmail: order.customer?.email || order.email,
                    customerPhone: order.customer?.phone || order.billingAddress?.phone,
                    displayFinancialStatus: order.displayFinancialStatus,
                    displayFulfillmentStatus: order.displayFulfillmentStatus,
                    plates: plates,
                    productionStatus: 'ORDER_PLACED',
                };
                await ordersCollection.insertOne(orderData);
        }
    }

    async getLicensePlate(plateId: any) {
        try {
            const dbClient = await clientPromise;
            const db = dbClient.db();
            const licencePlates = db.collection('licensePlates');
            const customTemplates = db.collection('customTemplates');
            let licensePlate;
            let customTemplate;
            licensePlate = await licencePlates.findOne({_id: new ObjectId(plateId)});
            if (licensePlate) {
                customTemplate = await customTemplates.findOne({_id: new ObjectId(licensePlate.customTemplateId)});
                licensePlate.customTemplate = customTemplate;
            } else {
                licensePlate = await getLicensePlateFirebase(plateId);
                if (licensePlate) {
                    customTemplate = await getCustomTemplateFirebase(licensePlate.customTemplateId);
                    licensePlate.customTemplate = customTemplate;
                }
            }
            return licensePlate;
        } catch (error) {
            console.log('GET LICENSE PLATE' ,error);
        }
    }

    async getCustomTemplate(customTemplateId: any) {
        try {
            const dbClient = await clientPromise;
            const db = dbClient.db();
            const customTemplates = db.collection('customTemplates');
            return customTemplates?.findOne({_id: new ObjectId(customTemplateId)});
        } catch (error) {
            console.log('GET CUSTOM TEMPLATE', error);
        }
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
                    "plates.plateData.plateNumber": {
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

        const orders = await ordersCollection.find(filterQuery).sort({'createdAt': -1}).toArray();
        const indexOrders = orders.slice(skip, skip + count);
        console.log('ORDERS', orders.length);
        const response = {
            pages: Math.ceil(orders.length / count),
            pageIndex: parseInt(cursor, 10),
            orders: indexOrders,
        };
        return response;
    }

    async getOrderById(orderId: any) {
        return await getOrderById(orderId);
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
        //Update license plate in order
        const ordersCollection = db.collection('orders');
        const orders = await ordersCollection.find({'plates.plateId': licencePlateId}).toArray();
        for (const order of orders) {
            const plates = order.plates.map((plate: any) => {
                if (plate.plateId === licencePlateId) {
                    plate.plateData = licencePlate;
                }
                return plate;
            });
            await ordersCollection.updateOne({orderId: order.orderId}, {
                $set: {plates: plates}
            });
        }
        return plateCollection.findOne({_id: new ObjectId(licencePlateId)});
    }

    async updateCustomTemplate(customTemplateId: any, customTemplate: any) {
        let dbClient = await clientPromise;
        const db = dbClient.db();
        const customTemplateCollection = db.collection('customTemplates');
        await customTemplateCollection.updateOne({_id: new ObjectId(customTemplateId)}, {
            $set: customTemplate
        });
        //Update custom template in order
        const ordersCollection = db.collection('orders');
        const orders = await ordersCollection.find({'plates.customTemplateData._id': customTemplateId}).toArray();
        for (const order of orders) {
            const plates = order.plates.map((plate: any) => {
                if (plate.customTemplateData._id === customTemplateId) {
                    plate.customTemplateData = customTemplate;
                }
                return plate;
            });
            await ordersCollection.updateOne({orderId: order.orderId}, {
                $set: {plates: plates}
            });
        }
        return customTemplateCollection.findOne({_id: new ObjectId(customTemplateId)});
    }

    async findOrder(orderId: any) {
        let dbClient = await clientPromise;
        const db = dbClient.db();
        const ordersCollection = db.collection('orders');
        return ordersCollection.findOne({orderId: orderId});
    }

    async createOrder(data: any) {
        let dbClient = await clientPromise;
        const db = dbClient.db();
        const ordersCollection = db.collection('orders');
        const lineItems = data.line_items;
        let plates = [];

        for (const lineItem of lineItems) {
            const plateIdAttribute = lineItem.properties?.find(attr => attr?.name === 'Plate ID');
            const previewAttribute = lineItem.properties?.find(attr => attr?.name === 'Preview');



            if (plateIdAttribute && previewAttribute) {
                const plateId = plateIdAttribute.value;
                const preview = previewAttribute.value;

                let licencePlate;
                let customTemplate;
                let qrCode;
                if (plateId) {
                    licencePlate = await this.getLicensePlate(plateId);
                }
                if (licencePlate) {
                    customTemplate = await this.getCustomTemplate(licencePlate.customTemplateId);
                }
                const baseColor = lineItem?.name === "Add-on - Metallic Upgrade"
                    ? lineItem?.variant_title
                    : lineItem?.variant_title === "Add-on - Color Match"
                        ? "Color Match - Ask Team"
                        : (
                            customTemplate?.backgroundSettings.color === '#ffffff' ||
                            customTemplate?.backgroundSettings?.stroke?.color === '#ffffff' ||
                            customTemplate?.state?.color === '#ffffff' ||
                            customTemplate?.state?.stroke?.color === '#ffffff' ||
                            customTemplate?.state?.glow?.color === '#ffffff' ||
                            customTemplate?.plateNumber?.color === '#ffffff' ||
                            customTemplate?.plateNumber?.stroke?.color === '#ffffff' ||
                            (customTemplate?.bottomTextEnabled && customTemplate?.bottomText?.color === '#ffffff') ||
                            (customTemplate?.bottomTextEnabled && customTemplate?.bottomText?.stroke?.color === '#ffffff') ||
                            (customTemplate?.bottomTextEnabled && customTemplate?.bottomText?.glow?.color === '#ffffff')
                        )
                            ? 'WHITE'
                            : 'SEALER';

                const finish = lineItems.find((item: any) => (!item.name.includes("Add-on")))?.variant_title;
                console.log('FINISH', finish);

                plates.push({plateId: plateId, plateData: licencePlate, customTemplateData: customTemplate, baseColor: baseColor, finish: finish, preview: preview, productionStatus: 'ORDER_PLACED'});
            }
        }



        const orderData = {
            orderId: data.id,
            createdAt: data.created_at,
            name: data.name,
            customerName: data.customer?.displayName || data.billing_address.first_name + ' ' + data.billing_address.last_name,
            customerEmail: data.customer?.email || data.email,
            customerPhone: data.customer?.phone || data.billing_address.phone,
            displayFinancialStatus: data.financial_status,
            displayFulfillmentStatus: data.fulfillment_status || 'Unfulfilled',
            plates: plates,
            productionStatus: 'ORDER_PLACED',
        }
        const order = await ordersCollection.insertOne(orderData);
        return order;
    }

    async getOrder(orderId: any | string) {
        let dbClient = await clientPromise;
        const db = dbClient.db();
        const ordersCollection = db.collection('orders');
        return ordersCollection.findOne({orderId: parseInt(orderId, 10)});
    }

    async updateLicensePlateStatus(plateIds: any, status: any, orderId: any) {
        let dbClient = await clientPromise;
        const db = dbClient.db();
        const ordersCollection = db.collection('orders');
        const order = await ordersCollection.findOne({orderId: orderId});
        if (order) {
            const plates = order.plates.map((plate: any) => {
                if (plateIds.includes(plate.plateId)) {
                    plate.productionStatus = status;
                }
                return plate;
            });
            //Update order productionStatus if all plates are in the same status
            const allPlates = order.plates;
            const allPlatesStatus = allPlates.map((plate: any) => plate.productionStatus);
            const uniqueStatus = [...new Set(allPlatesStatus)];
            console.log('UNIQUE STATUS', uniqueStatus);
            if (uniqueStatus.length === 1) {
                order.productionStatus = status;
            }
            await ordersCollection.updateOne({orderId: orderId}, {
                $set: order
            });
        }
        return order;
    }

    async getStatusAllowed(orderId: any | string, userId: string) {
        let dbClient = await clientPromise;
        const db = dbClient.db();
        const userCollection = db.collection('users');
        const rolesCollection = db.collection('roles');
        const user = await userCollection.findOne({_id: new ObjectId(userId)});
        const role = await rolesCollection.findOne({roleType: user?.role});
        console.log('USER', role);
        return role?.roleStatuses;
    }
}

export default OrderRepository;
