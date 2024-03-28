import StoreFrontRepository from '../../../../../infrastructure/store_front/repositories/store_front_repository';

export default async (req, res) => {
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const phone = req.body.phone;
    const address = req.body.address;
    const city = req.body.city;
    const country = req.body.country;
    const zip = req.body.zip;
    const province = req.body.province;
    const accessToken = req.body.accessToken;
    const storeFrontRepository = new StoreFrontRepository();
    const data = await storeFrontRepository.updateCustomer(accessToken, firstName, lastName, email, phone, address, city, country, zip, province);
    res.status(200).json({data: data});
};