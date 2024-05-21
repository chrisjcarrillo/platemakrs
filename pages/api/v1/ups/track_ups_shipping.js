import UPSRepository from "../../../../infrastructure/ups/repositories/ups_repository";

export default async (req, res) => {
    const apiKey = req.headers['x-api-key'];
    const upsRepository = new UPSRepository();
    const body = req.body;
    const trackingNumber = body.trackingNumber;
    if (!trackingNumber) {
        res.status(400).send('Bad Request');
        return;
    }
    if (apiKey !== process.env.API_KEY) {
        res.status(401).send('Unauthorized');
        return;
    }
    try {
        const shipping = await upsRepository.trackShipping(trackingNumber);
        res.status(200).json(shipping);
    } catch (error) {
        console.error('Error processing Shopify webhook:', error);
        res.status(500).send('Internal Server Error');
    }
};