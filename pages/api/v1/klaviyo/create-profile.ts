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
                    // type: 'profile-subscription-bulk-create-job',
                    // attributes: {
                    //     custom_source: 'Editor Form - Platemakrs',
                    //     profiles: {
                    //         data: [
                    //             {
                    //                 type: 'profile',
                    //                 attributes: {
                    //                     first_name: req.body.firstName,
                    //                     last_name: req.body.lastName,
                    //                     email: req.body.email,
                    //                     phone_number: req.body.phone,
                    //                     subscriptions: {
                    //                         email: { marketing: { consent: 'SUBSCRIBED' } },
                    //                         sms: { marketing: { consent: 'SUBSCRIBED' } }
                    //                     }
                    //                 }
                    //             }
                    //         ]
                    //     }
                    // },
                }
            })
        })

        // const subscribeUser = await fetch('https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/', {
        //     method: 'POST',
        //     headers: {
        //         accept: 'application/json',
        //         revision: '2024-05-15',
        //         'content-type': 'application/json',
        //         Authorization: 'Klaviyo-API-Key pk_b94e5665e081726687a678f8c8cc78e814'
        //     },
        //     body: JSON.stringify({
        //         data: {
        //             // type: 'profile',
        //             // attributes: {
        //             //     email: req.body.email,
        //             //     phone_number: req.body.phone,
        //             //     first_name: req.body.firstName,
        //             //     last_name: req.body.lastName
        //             // }
        //             type: 'profile-subscription-bulk-create-job',
        //             attributes: {
        //                 custom_source: 'Editor Form - Platemakrs',
        //                 profiles: {
        //                     data: [
        //                         {
        //                             type: 'profile',
        //                             attributes: {
        //                                 first_name: req.body.firstName,
        //                                 last_name: req.body.lastName,
        //                                 email: req.body.email,
        //                                 phone_number: req.body.phone,
        //                                 subscriptions: {
        //                                     email: { marketing: { consent: 'SUBSCRIBED' } },
        //                                     sms: { marketing: { consent: 'SUBSCRIBED' } }
        //                                 }
        //                             }
        //                         }
        //                     ]
        //                 }
        //             },
        //         }
        //     })
        // })
        res.status(200).json(createProfile);
    } catch (error: any) {
        return res.status(error.statusCode || 500).json({ error: error.message });
    }
}

export default sendEmail;