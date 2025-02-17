import OrderRepository from "../../../../infrastructure/orders/repositories/order_repository";

const crypto = require('crypto');

export default async (req, res) => {
    const apiKey = req.headers['x-api-key'];
    console.log('API Key:', apiKey);
    console.log('API Key:', process.env.PLATEMAKRS_API_KEY);
    const orderRepository = new OrderRepository();
    try {
        if (!apiKey) {
            return res.status(401).send('Unauthorized');
        }
        if (apiKey !== process.env.PLATEMAKRS_API_KEY) {
            return res.status(403).send('Forbidden');
        }
        await orderRepository.seedOrders();
        res.status(200).end();
    } catch (error) {
        console.error('Error processing Shopify webhook:', error);
        res.status(500).send('Internal Server Error');
    }
};