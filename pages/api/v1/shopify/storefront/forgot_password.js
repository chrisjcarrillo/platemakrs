import StoreFrontRepository from '../../../../../infrastructure/store_front/repositories/store_front_repository';

export default async (req, res) => {
    const email = req.body.email;
    const storeFrontRepository = new StoreFrontRepository();
    const data = await storeFrontRepository.forgotPassword(email);
    res.status(200).json({data: data});
};