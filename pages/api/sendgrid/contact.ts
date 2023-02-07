import sendgrid from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

sendgrid.setApiKey('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');

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
	try {
		await sendgrid.send({
			to: req.body.toEmails, // Your email where you'll receive emails
			from: `info@platemakrs.com`, // your website email address here
			subject: `License Plate Inquiry`,
			html: `
        Hey Admin!
        <br>
		<br>
        Below is the contact form information from the website.
        <br>
		<br>
        FIRST NAME: ${req.body.firstName}
        <br>
		<br>
        LAST NAME: ${req.body.lastName}
        <br>
		<br>
        EMAIL ADDRESS: ${req.body.email}
        <br>
		<br>
        PHONE NUMBER: <a href='tel:${req.body.phoneNumber}'>${req.body.phoneNumber}</a>
        <br>
		<br>
        Summary: ${req.body.message}
        <br>
      `,
		});
        return res.status(200).json({ success: "ok" });
	} catch (error: any) {
		// console.log(error);
		return res.status(error.statusCode || 500).json({ error: error.message });
	}
}

export default sendEmail;