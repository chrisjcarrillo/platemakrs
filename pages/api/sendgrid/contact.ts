import sendgrid from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

sendgrid?.setApiKey(
	process?.env?.NEXT_SENDGRID_TOKEN ?? ''
);

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
	try {
		// 
		const message = {
			from: `info@platemakrs.com`, // your website email address here
			templateId: 'd-216aef6367ec4baca9ec82ec484f6eef',
			personalizations: [{
				to: req.body.toEmails,
				subject: `Contact Inquiry: ${req.body.firstName} ${req.body.lastName}`,
				dynamic_template_data: {
					"firstName": req.body.firstName,
					"lastName": req.body.lastName,
					"email": req.body.email,
					"phoneNumber": req.body.phoneNumber,
					"summary": req.body.message,
				},
			}],
		}
		sendgrid.send(message);
        return res.status(200).json({ success: "ok" });
	} catch (error: any) {
		return res.status(error.statusCode || 500).json({ error: error.message });
	}
}

export default sendEmail;