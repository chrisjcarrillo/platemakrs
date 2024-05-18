import UPSRepository from "../../../../infrastructure/ups/repositories/ups_repository";

export default async (req, res) => {
    const apiKey = req.headers['x-api-key'];
    const upsRepository = new UPSRepository();
    const body = req.body;

    try {
        const token = await upsRepository.createReturnLabel(body);
        res.status(200).json(token);
    } catch (error) {
        console.error('Error processing Shopify webhook:', error);
        res.status(500).send('Internal Server Error');
    }
};