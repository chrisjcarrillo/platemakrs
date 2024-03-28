import StoreFrontRepository from '../../../../../infrastructure/store_front/repositories/store_front_repository';

export default async (req, res) => {
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;
    const storeFrontRepository = new StoreFrontRepository();
    const data = await storeFrontRepository.customerLogin(email, password);
    res.status(200).json({data: data});
};