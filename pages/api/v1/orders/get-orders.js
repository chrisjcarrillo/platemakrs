import OrderRepository from "../../../../infrastructure/orders/repositories/order_repository";

export default async (req, res) => {
    const orderRepository = new OrderRepository();
    const apiKey = req.headers['x-api-key'];
    const query = req.query.query;
    const count = req.query.count ? parseInt(req.query.count, 10) : 50;
    const page = req.query.page
    try {
            if (!apiKey) {
                return res.status(401).send('Unauthorized');
            }
            if (apiKey !== process.env.PLATEMAKRS_API_KEY) {
                return res.status(403).send('Forbidden');
            }
            const data = await orderRepository.getOrders(query, count, page);
            res.status(200).json(data)
    } catch (error) {
        console.error('Error processing Shopify webhook:', error);
        res.status(500).send('Internal Server Error');
    }
};