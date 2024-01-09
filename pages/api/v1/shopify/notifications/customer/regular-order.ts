import sendgrid from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

sendgrid?.setApiKey(
	process?.env?.NEXT_SENDGRID_TOKEN ?? ''
);

async function regularOrder(req: NextApiRequest, res: NextApiResponse) {
	try {
		// if it's only a designer order return

		const includesDesigner = req.body.line_items.find((item: any) => item.title === "Add-on - Work with a Designer");

		const message = {
			from: `info@platemakrs.com`, // your website email address here
			templateId: 'd-2afb192cf0134778804ea34fee66b3c8',
			personalizations: [{
				to: [`${req.body?.customer?.email}`],
				cc: ['orders@platemakrs.com'],
                subject: `Platemakrs Order: ${req?.body.name} - Next Steps`,
				dynamic_template_data: {
					"firstName": req.body?.customer?.first_name,
					"email": req.body?.customer?.email,
					"orderId": req?.body.name,
				},
			}],
		}

		if(req.body?.line_items?.length === 1 && includesDesigner){
			return res.status(200).json({ success: "Nothing was sent!" });
		}

		await sendgrid.send(message);
        return res.status(200).json({ success: "ok" });
	} catch (error: any) {
		return res.status(error.statusCode || 500).json({ error: error.message });
	}
}

export default regularOrder;