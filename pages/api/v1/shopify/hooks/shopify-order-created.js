import OrderRepository from "../../../../../infrastructure/orders/repositories/order_repository";

export default async (req, res) => {
    const orderRepository = new OrderRepository();
    try {
        const data = await req.body;
        const order = await orderRepository.createOrder(data);
        res.status(200).json(order);
    } catch (error) {
        console.error('Error processing Shopify webhook:', error);
        res.status(500).send('Internal Server Error');
    }
};