import sendgrid from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

sendgrid?.setApiKey(
	process?.env?.NEXT_SENDGRID_TOKEN ?? ''
);

async function designerOrder(req: NextApiRequest, res: NextApiResponse) {
	try {

		const includesDesigner = req.body.line_items.find((item: any) => item.title === "Add-on - Work with a Designer");

		const message = {
			from: `chris@platemakrs.com`, // your website email address here
			templateId: 'd-05dd3bf0f97e490690e7d2cec0fa0d99',
			personalizations: [{
				to: [`${req.body?.customer?.email}`],
				cc: ['orders@platemakrs.com'],
                subject: `Platemakrs Order: ${req?.body.name} - Next Steps!`,
				dynamic_template_data: {
					"firstName": req.body?.customer?.first_name,
					"email": req.body?.customer?.email,
					"orderId": req?.body.name,
				},
			}],
		}

		if(includesDesigner){
            sendgrid.send(message);
            return res.status(200).json({ success: `${req?.body.name} - designer message sent` });
		}

        return res.status(200).json({ success: "Nothing was sent!" });

	} catch (error: any) {
		return res.status(error.statusCode || 500).json({ error: error.message });
	}
}

export default designerOrder;