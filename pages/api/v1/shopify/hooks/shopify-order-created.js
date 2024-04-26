import OrderRepository from "../../../../../infrastructure/orders/repositories/order_repository";

const crypto = require('crypto');

export default async (req, res) => {
    const orderRepository = new OrderRepository();
    try {
        const data = await req.body;
        const hmacHeader = await req.headers['x-shopify-hmac-sha256'];
        console.log('Shopify Order', data);
        const digest = crypto
            .createHmac('sha256', process.env.SHOPIFY_WEBHOOK_SECRET)
            .update(JSON.stringify(data))
            .digest('base64');

        if (hmacHeader !== digest) {
            await orderRepository.createOrder(data);
        } else {
            res.status(401).send({error: 'HMAC validation failed', digest: digest, hmacHeader: hmacHeader})
        }
    } catch (error) {
        console.error('Error processing Shopify webhook:', error);
        res.status(500).send('Internal Server Error');
    }
};