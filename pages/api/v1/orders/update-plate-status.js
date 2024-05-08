import OrderRepository from "../../../../infrastructure/orders/repositories/order_repository";

export default async (req, res) => {
    const apiKey = req.headers['x-api-key'];
    const orderRepository = new OrderRepository();
    const plateIds = req.body.plateIds;
    const status = req.body.status;
    const orderId = req.body.orderId;
    try {
        if (!apiKey) {
            return res.status(401).send('Unauthorized');
        }
        if (apiKey !== process.env.PLATEMAKRS_API_KEY) {
            return res.status(403).send('Forbidden');
        }
        const data = await orderRepository.updateLicensePlateStatus(plateIds, status, orderId);
        res.status(200).json(data);
    } catch (error) {
        console.error('Error processing Shopify webhook:', error);
        res.status(500).send('Internal Server Error');
    }
};