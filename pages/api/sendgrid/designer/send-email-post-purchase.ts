import sendgrid from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

sendgrid?.setApiKey(
	process?.env?.NEXT_SENDGRID_TOKEN ?? ''
);

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
	try {
		console.log(req?.body)
		const filter = req?.body?.line_items?.filter((item: any) => ( item?.title === 'Add-on - Work with a Designer') || ( item?.title === 'Deposit Fee'));
		console.log('WWAD length: ', filter.length);
		if(filter?.length > 0){
			const customerMessage = {
				from: `info@platemakrs.com`, // your website email address here
				templateId: 'd-889b538425fc43368db647cda9e39d56',
				personalizations: [{
					to: [`${req?.body?.email}`],
					subject: `Platemakrs Order: ${req?.body?.name} - Work with a Designer`,
					dynamic_template_data: {
						"firstName": req?.body?.billing_address?.first_name,
						"email": req?.body?.email,
						"id": req?.body?.id,
						"orderId": req?.body?.name
					}, 
				}],
			}
			
			const adminMessage = {
				from: `info@platemakrs.com`, // your website email address here
				templateId: 'd-4358a926efef42c993cafea8e04a8073',
				personalizations: [{
					to: ['design@platemakrs.com'],
					subject: `Work with a Designer: ${req?.body?.name} - First Step`,
					dynamic_template_data: {
						"firstName": req?.body?.billing_address?.first_name,
						"lastName": req?.body?.billing_address?.last_name,
						"phoneNumber": req?.body?.billing_address?.phone,
						"stateCode": req?.body?.billing_address?.province_code,
						"email": req?.body?.email,
						"id": req?.body?.id,
						"orderId": req?.body?.name
					}, 
				}],
			}
			const customerEmail = await sendgrid.send(customerMessage);
			const adminEmail = await sendgrid.send(adminMessage);
			customerEmail;
			adminEmail;
			return res.status(200).json({ success: `Work with a designer - ${req?.body?.name}` });
		}
		return res.status(200).json({ success: "Not Work with a designer" });
		
	} catch (error: any) {
		return res.status(200).json({ error: error.message });
	}
}

export default sendEmail;