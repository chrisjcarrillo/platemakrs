import OrderRepository from "../../../../../infrastructure/orders/repositories/order_repository";
import UPSRepository from "../../../../../infrastructure/ups/repositories/ups_repository";

export default async (req, res) => {
    const orderRepository = new OrderRepository();
    const upsRepository = new UPSRepository();
    try {
        const data = await req.body;
        const order = await orderRepository.createOrder(data);
        await upsRepository.createReturnLabel(data);
        res.status(200).json(order);
    } catch (error) {
        console.error('Error processing Shopify webhook:', error);
        res.status(200).send('Internal Server Error');
    }
};