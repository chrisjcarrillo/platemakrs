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
            const shopifyOrder = req.body;
            let content = [];
            let content_ids = [];

            if(shopifyOrder?.note_attributes.length === 0 || 
                shopifyOrder?.note_attributes[0].value === 'null'){
                console.error('Purchase Not Processable');
                return; 
            } 

            const userData = (new UserData())
                .setFirstName(shopifyOrder?.customer?.first_name)
                .setLastName(shopifyOrder?.customer?.last_name)
                .setEmail(shopifyOrder?.email)
                .setPhone(shopifyOrder?.billing_address?.phone)
                .setCity(shopifyOrder?.billing_address?.city)
                .setState(shopifyOrder?.billing_address?.province_code)
                .setCountry(shopifyOrder?.billing_address?.country_code)
                .setZip(shopifyOrder?.billing_address?.zip)
                .setClientIpAddress(shopifyOrder?.client_details?.browser_ip)
                .setClientUserAgent(shopifyOrder?.client_details?.user_agent)
                .setFbc(shopifyOrder?.note_attributes[0].value)
                .setFbp(shopifyOrder?.note_attributes[1].value);

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

            const customData = (new CustomData())
                                .setContents(content)
                                .setContentIds(content_ids)
                                .setCurrency('USD')
                                .setOrderId(shopifyOrder?.fulfillments[0].order_id)
                                .setStatus(shopifyOrder?.fulfillment_status)
                                .setValue(shopifyOrder?.current_total_price)
                                .setContentCategory('Tickets')
                                .setContentType('product')
            
            const serverEvent = (new ServerEvent())
                                .setEventName('Purchase')
                                .setEventTime(shopifyOrder?.created_at)
                                .setUserData(userData)
                                .setCustomData(customData)
                                .setEventId(shopifyOrder?.note_attributes[6].value + '-TEST')
                                .setEventSourceUrl(shopifyOrder?.note_attributes[3].value)
                                .setActionSource('website')
                                .setOptOut(false)
                                .setDataProcessingOptions([])
                                .setDataProcessingOptionsCountry(0)
                                .setDataProcessingOptionsState(0)
                            
            const eventsData = [serverEvent];
            const eventRequest = (new EventRequest(access_token, pixel_id)).setTestEventCode('TEST75248').setEvents(eventsData);
            
            try {
                const request = await eventRequest.execute();
                return res.status(200).json({ 
                    request: request
                });
            } catch (error) {
                return res.status(403);
            }                      
        }
}
export default resolver;