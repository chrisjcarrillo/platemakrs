import StoreFrontRepository from '../../../../../infrastructure/store_front/repositories/store_front_repository';

export default async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const phone = req.body.phone;
    const storeFrontRepository = new StoreFrontRepository();
    const data = await storeFrontRepository.createCustomer(email, firstName, lastName, phone, password)
    res.status(200).json({data: data});
};