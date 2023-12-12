import sendgrid from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

sendgrid?.setApiKey(
	process?.env?.NEXT_SENDGRID_TOKEN ?? ''
);

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
	try {
		const message = {
			from: `info@platemakrs.com`, // your website email address here
			templateId: 'd-d43719eb35424f24824f2011e443b35c',
			personalizations: [{
				to: req.body.toEmails,
				subject: `License Plate Inquiry: ${req.body.firstName} ${req.body.lastName}`,
				dynamic_template_data: {
					"firstName": req.body.firstName,
					"lastName": req.body.lastName,
					"email": req.body.email,
					"phoneNumber": req.body.phoneNumber,
					"stateCode": req.body.state,
					"summary": req.body.message,
					"licensePlate": req.body.licensePlate,
					"attachments": req.body.attachments
				},
			}],
		}
		await sendgrid.send(message);
        return res.status(200).json({ success: "ok" });
	} catch (error: any) {
		return res.status(error.statusCode || 500).json({ error: error.message });
	}
}

export default sendEmail;