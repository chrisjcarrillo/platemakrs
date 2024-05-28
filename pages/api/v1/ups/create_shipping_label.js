import UPSRepository from "../../../../infrastructure/ups/repositories/ups_repository";

export default async (req, res) => {
    const apiKey = req.headers['x-api-key'];
    const upsRepository = new UPSRepository();
    const body = req.body;
    const orderId = body.orderId;
    const type = body.type;
    const service = body.service;
    if (!orderId || !type) {
        res.status(400).send('Bad Request');
        return;
    }
    if (apiKey !== process.env.PLATEMAKRS_API_KEY) {
        res.status(401).send('Unauthorized');
        return;
    }
    try {
        const shipping = await upsRepository.createShippingLabel(orderId, type, service);
        res.status(200).json(shipping);
    } catch (error) {
        console.error('Error processing Shopify webhook:', error);
        res.status(500).send('Internal Server Error');
    }
};