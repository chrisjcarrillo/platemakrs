import sendgrid from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

async function sendLabel(req: NextApiRequest, res: NextApiResponse) {
	try {
		const fetchShipment = await fetch(`https://api.easyship.com/2023-01/shipments/${req?.body?.resource_id}`, {
			method: 'GET',
			headers: {
			  accept: 'application/json',
			  authorization: 'Bearer prod_+Y/fuub+5fbWmBXQk9UVU8R0m8kOfcWaLUhtQk8SkkM='
			}
		})
		console.log(fetchShipment?.return)
		console.log(req.body)
        return res.status(200).json({ success: "test" });
	} catch (error: any) {
		return res.status(error.statusCode || 500).json({ error: error.message });
	}
}

export default sendLabel;