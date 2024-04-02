import StoreFrontRepository from '../../../../../infrastructure/store_front/repositories/store_front_repository';

export default async (req, res) => {
    const { accessToken, address, city, province, zip, country } = req.body;
    const storeFrontRepository = new StoreFrontRepository();
    const data = await storeFrontRepository.createCustomerAddress(accessToken, address, city, province, zip, country)
    res.status(200).json({data: data});
};