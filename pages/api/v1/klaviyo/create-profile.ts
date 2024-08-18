import { NextApiRequest, NextApiResponse } from "next";

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
    try {
        console.log(req.body)
        const createProfile = await fetch('https://a.klaviyo.com/api/profiles/', {
            method: 'POST',
            headers: {
                revision: '2024-05-15',
                'content-type': 'application/json',
                Authorization: `Klaviyo-API-Key ${process.env.KLAVIYO_API_KEY}`
            },
            body: JSON.stringify({
                data: {
                    type: 'profile',
                    attributes: {
                        email: req.body.email,
                        phone_number: `+1${req.body.phone}`,
                        first_name: req.body.firstName,
                        last_name: req.body.lastName
                    }
                }
            })
        })
        res.status(200).json(createProfile);
    } catch (error: any) {
        return res.status(error.statusCode || 500).json({ error: error.message });
    }
}

export default sendEmail;