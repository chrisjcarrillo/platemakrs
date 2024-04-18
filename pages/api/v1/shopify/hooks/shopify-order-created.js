
const crypto = require('crypto');

export default async (req, res) => {
    const orderRepository = new OrderRepository();
    try {
        const data = await req.body;
        const hmacHeader = await req.headers['x-shopify-hmac-sha256'];
        console.log('Shopify Order', data);
        const digest = crypto
            .createHmac('sha256', process.env.SHOPIFY_WEBHOOK_SECRET)
            .update(JSON.stringify(data))
            .digest('base64');

        if (hmacHeader !== digest) {
            const orderData = {
                order_id: data.id,
            }

            // Update voucher customer_id
            let voucher = await voucherRepository.getVoucherByCustomerId(data.customer?.email);
            if (voucher && !voucher.customer_id) {
                const voucherData = {
                    customer_id: data.customer?.id,
                }
                await voucherRepository.updateVoucherByCustomerEmail(data.customer?.email, voucherData);
            }

            // Update user shopify_id
            let user = await userRepository.getUserByEmail(data.customer?.email);
            if (user && !user.shopify_id) {
                const userData = {
                    shopify_id: data.customer?.id,
                }
                await userRepository.updateUser(data.customer?.email, userData);
            }
            res.status(200).end();
        } else {
            res.status(401).send({error: 'HMAC validation failed', digest: digest, hmacHeader: hmacHeader})
        }
    } catch (error) {
        console.error('Error processing Shopify webhook:', error);
        res.status(500).send('Internal Server Error');
    }
};