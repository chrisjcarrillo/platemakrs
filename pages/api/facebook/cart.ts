import { NextApiRequest, NextApiResponse } from "next";
const fbSdk = require('facebook-nodejs-business-sdk');
const access_token = process?.env?.NEXT_FB_API_KEY;
const pixel_id = process?.env?.NEXT_FB_PIXEL_ID;
const Content = fbSdk.Content;
const CustomData = fbSdk.CustomData;
const EventRequest = fbSdk.EventRequest;
const UserData = fbSdk.UserData;
const ServerEvent = fbSdk.ServerEvent;
const api = fbSdk.FacebookAdsApi.init(access_token);

async function resolver(
    req: NextApiRequest, 
    res: NextApiResponse
){
        if(req.method === "POST"){
            console.log(req.body);
            const addToCartObj = req.body;
            let content = [];
            let content_ids = []; 

            const userData = (new UserData())
                .setClientIpAddress(addToCartObj?.clientIp)
                .setClientUserAgent(addToCartObj?.clientUserAgent)
                .setFbc(addToCartObj?.facebookClickId)
                .setFbp(addToCartObj?.facebookPixelId);

            const lineItem = {}

            shopifyOrder.line_items.map(item => {
                let lineItem = (new Content())
                    .setTitle(item.title)
                    .setDescription(item.name)
                    .setId(item.product_id)
                    .setQuantity(item.quantity)
                    .setItemPrice(item.price)
                content.push(lineItem);
                content_ids.push(item.product_id);
            })

            // const customData = (new CustomData())
            //                     .setContents(content)
            //                     .setContentIds(content_ids)
            //                     .setCurrency('USD')
            //                     .setValue(shopifyOrder?.current_total_price)
            //                     .setContentCategory('Tickets')
            //                     .setContentType('product')
            
            // const serverEvent = (new ServerEvent())
            //                     .setEventName('AddToCart')
            //                     .setEventTime(shopifyOrder?.created_at)
            //                     .setUserData(userData)
            //                     .setCustomData(customData)
            //                     .setEventId(shopifyOrder?.note_attributes[6].value + '-TEST')
            //                     .setEventSourceUrl(shopifyOrder?.note_attributes[3].value)
            //                     .setActionSource('website')
            //                     .setOptOut(false)
            //                     .setDataProcessingOptions([])
            //                     .setDataProcessingOptionsCountry(0)
            //                     .setDataProcessingOptionsState(0)
                            
            // const eventsData = [serverEvent];
            // const eventRequest = (new EventRequest(access_token, pixel_id)).setTestEventCode('TEST75248').setEvents(eventsData);
            
            // try {
            //     const request = await eventRequest.execute();
            //     return res.status(200).json({ 
            //         request: request
            //     });
            // } catch (error) {
            //     return res.status(403);
            // }                      
        }
}
export default resolver;