import {
    addressCreate, addressUpdate,
    createCustomer,
    customerUpdate,
    forgotPassword,
    getAccessToken, getCustomerData
} from "../datasources/remote";




class StoreFrontRepository {

    async customerLogin(email, password) {
        return await getAccessToken(email, password);
    }

    async createCustomer(email, firstName, lastName, phone, password) {
        return await createCustomer(email, firstName, lastName, phone, password)
    }

    async updateCustomer(accessToken, firstName, lastName, email, phone) {
        return await customerUpdate(accessToken, firstName, lastName, email, phone)
    }

    async forgotPassword(email) {
        return await forgotPassword(email);
    }

    async getCustomer(accessToken, startCursor) {
        return await getCustomerData(accessToken, startCursor);
    }

    async createCustomerAddress(accessToken, address, city, province, zip, country) {
        return await addressCreate(accessToken, address, city, province, zip, country);
    }
    async updateCustomerAddress(accessToken, addressId, address, city, province, zip, country) {
        return await addressUpdate(accessToken, addressId, address, city, province, zip, country);
    }
}

module.exports = StoreFrontRepository;
