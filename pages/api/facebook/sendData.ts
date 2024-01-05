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
import path from 'path';
import { promises as fs } from 'fs';

async function resolver(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if(req.method === "POST"){
        try{
            const fileContents = await fs.readFile('csvjson.json');
            const test = JSON.parse(fileContents.toString());
            const sendCartApi = await fetch('https://hooks.zapier.com/hooks/catch/15795771/3s4mia1/', {
                headers: {
                    "Content-Type": "application/json",
                },
                mode: "no-cors",
                method: "POST",
                body: JSON.stringify({
                    data: test[139]
                })
            
            });
             return res.status(200).json({
                request: sendCartApi
            });
                
        } catch (error) {
            console.error(error)
            return res.status(403);
        }
    }
}
export default resolver;

// import { NextApiRequest, NextApiResponse } from "next";
// const fbSdk = require('facebook-nodejs-business-sdk');
// const access_token = process?.env?.NEXT_FB_API_KEY;
// const pixel_id = process?.env?.NEXT_FB_PIXEL_ID;
// const Content = fbSdk.Content;
// const CustomData = fbSdk.CustomData;
// const EventRequest = fbSdk.EventRequest;
// const UserData = fbSdk.UserData;
// const ServerEvent = fbSdk.ServerEvent;
// const api = fbSdk.FacebookAdsApi.init(access_token);
// import path from 'path';
// import { promises as fs } from 'fs';

// async function resolver(
//     req: NextApiRequest,
//     res: NextApiResponse
// ) {
//     if(req.method === "POST"){
//         try{
//             const fileContents = await fs.readFile('csvjson.json');
//             // try{
//             //     const sendCartApi = await fetch('https://hooks.zapier.com/hooks/catch/15795771/3s4mia1/', {
//             //         headers: {
//             //             "Content-Type": "application/json",
//             //         },
//             //         mode: "no-cors",
//             //         method: "POST",
//             //         body: JSON.parse(fileContents.toString())
                
//             //     });
//             //      return res.status(200).json({
//             //         request: sendCartApi
//             //     });
//             // }
//             const orders = JSON.parse(fileContents.toString())
                        
//             const userData = (new UserData())
//             .setFirstName(orders[0]?.firstName)
//             .setLastName(orders[0]?.lastName)
//             .setEmail(orders[0]?.email)
//             .setPhone(orders[0]?.Phone)
//             .setCity(orders[0]?.City)
//             .setState(orders[0]?.provinceCode)
//             .setCountry(orders[0]?.countryCode)
//             .setZip(orders[0]?.Zip)
//             .setFbc('fb.1.1696867530976.IwAR3Fc1oU-C1FjANO9ij_tlg8riiagi-uCGqB1_5oNnJuE_ga0V2wworoz8A')
//             .setFbp('fb.1.1221673915381910');
    
//             const serverEvent = (new ServerEvent())
//                             .setEventName('Purchase')
//                             // .setEventTime(shopifyOrder?.created_at)
//                             .setUserData(userData)
//                             // .setCustomData(customData)
//                             .setEventId(orders[0].customerId)
//                             .setEventSourceUrl('https://platemakrs.com/')
//                             .setActionSource('website')
//                             .setOptOut(false)
//                             .setDataProcessingOptions([])
//                             .setDataProcessingOptionsCountry(0)
//                             .setDataProcessingOptionsState(0)
    
//             const eventsData = [serverEvent];
//             const eventRequest = (new EventRequest(access_token, pixel_id)).setTestEventCode('TEST510').setEvents(eventsData);
//                 return res.status(200).json({
//                     request: eventRequest
//                 });
//         }catch (error) {
//             console.error(error)
//             return res.status(403);
//         }

//         // try {

//         //     // const request = await eventRequest.execute();
//         //     // console.log(request)
//         //     // res.status(200).json({ 
//         //     //         request: request
//         //     // });

//         //     const orders = JSON.parse(fileContents.toString())
            
//         //     const products = await Promise.all( orders[0].map( async(item: any) => {
                
//         //         const userData = (new UserData())
//         //         .setFirstName(item?.firstName)
//         //         .setLastName(item?.lastName)
//         //         .setEmail(item?.email)
//         //         .setPhone(item?.Phone)
//         //         .setCity(item?.City)
//         //         .setState(item?.provinceCode)
//         //         .setCountry(item?.countryCode)
//         //         .setZip(item?.Zip)
//         //         .setFbc('fb.1.1696867530976.IwAR3Fc1oU-C1FjANO9ij_tlg8riiagi-uCGqB1_5oNnJuE_ga0V2wworoz8A')
//         //         .setFbp('fb.1.1221673915381910');

//         //         const serverEvent = (new ServerEvent())
//         //                         .setEventName('Purchase')
//         //                         // .setEventTime(shopifyOrder?.created_at)
//         //                         .setUserData(userData)
//         //                         // .setCustomData(customData)
//         //                         .setEventId(item.customerId)
//         //                         .setEventSourceUrl('https://platemakrs.com/')
//         //                         .setActionSource('website')
//         //                         .setOptOut(false)
//         //                         .setDataProcessingOptions([])
//         //                         .setDataProcessingOptionsCountry(0)
//         //                         .setDataProcessingOptionsState(0)

//         //         const eventsData = [serverEvent];
//         //         const eventRequest = (new EventRequest(access_token, pixel_id)).setTestEventCode('TEST510').setEvents(eventsData);
//         //         const request = await eventRequest.execute();
//         //         console.log(request)
//         //     }))
//         //     console.log(products)
//         //     res.status(200)
//         //     // return res.status(200).json({
//         //     //     request: products
//         //     // });
//         // } catch (error) {
//         //     console.error(error)
//         //     return res.status(403);
//         // }




//         //     // if(shopifyOrder?.note_attributes.length === 0 || 
//         //     //     shopifyOrder?.note_attributes[0].value === 'null'){
//         //     //     console.error('Purchase Not Processable');
//         //     //     return; 
//         //     // } 

//         //     // const userData = (new UserData())
//         //     //     .setFirstName(shopifyOrder?.customer?.first_name)
//         //     //     .setLastName(shopifyOrder?.customer?.last_name)
//         //     //     .setEmail(shopifyOrder?.email)
//         //     //     .setPhone(shopifyOrder?.billing_address?.phone)
//         //     //     .setCity(shopifyOrder?.billing_address?.city)
//         //     //     .setState(shopifyOrder?.billing_address?.province_code)
//         //     //     .setCountry(shopifyOrder?.billing_address?.country_code)
//         //     //     .setZip(shopifyOrder?.billing_address?.zip)
//         //     //     .setClientIpAddress(shopifyOrder?.client_details?.browser_ip)
//         //     //     .setClientUserAgent(shopifyOrder?.client_details?.user_agent)
//         //     //     .setFbc(shopifyOrder?.note_attributes[0].value)
//         //     //     .setFbp(shopifyOrder?.note_attributes[1].value);


//         //     // const customData = (new CustomData())
//         //     //                     .setContents(content)
//         //     //                     .setContentIds(content_ids)
//         //     //                     .setCurrency('USD')
//         //     //                     .setOrderId(shopifyOrder?.fulfillments[0].order_id)
//         //     //                     .setStatus(shopifyOrder?.fulfillment_status)
//         //     //                     .setValue(shopifyOrder?.current_total_price)
//         //     //                     .setContentCategory('Tickets')
//         //     //                     .setContentType('product')
            
//         //     // const serverEvent = (new ServerEvent())
//         //     //                     .setEventName('Purchase')
//         //     //                     .setEventTime(shopifyOrder?.created_at)
//         //     //                     .setUserData(userData)
//         //     //                     .setCustomData(customData)
//         //     //                     .setEventId(shopifyOrder?.note_attributes[6].value + '-TEST')
//         //     //                     .setEventSourceUrl(shopifyOrder?.note_attributes[3].value)
//         //     //                     .setActionSource('website')
//         //     //                     .setOptOut(false)
//         //     //                     .setDataProcessingOptions([])
//         //     //                     .setDataProcessingOptionsCountry(0)
//         //     //                     .setDataProcessingOptionsState(0)
                            
//         //     // const eventsData = [serverEvent];
//         //     // const eventRequest = (new EventRequest(access_token, pixel_id)).setTestEventCode('TEST75248').setEvents(eventsData);
            
//         //     // fileContents.map(item => {
//         //     //     // let lineItem = (new Content())
//         //     //     //     .setTitle(item.title)
//         //     //     //     .setDescription(item.name)
//         //     //     //     .setId(item.product_id)
//         //     //     //     .setQuantity(item.quantity)
//         //     //     //     .setItemPrice(item.price)
//         //     //     // content.push(lineItem);
//         //     //     // content_ids.push(item.product_id);
//         //     // })

//         //             // const serverEvent = (new ServerEvent())
//         //     //                     .setEventName('Purchase')
//         //     //                     .setEventTime(shopifyOrder?.created_at)
//         //     //                     .setUserData(userData)
//         //     //                     .setCustomData(customData)
//         //     //                     .setEventId(shopifyOrder?.note_attributes[6].value + '-TEST')
//         //     //                     .setEventSourceUrl(shopifyOrder?.note_attributes[3].value)
//         //     //                     .setActionSource('website')
//         //     //                     .setOptOut(false)
//         //     //                     .setDataProcessingOptions([])
//         //     //                     .setDataProcessingOptionsCountry(0)
//         //     //                     .setDataProcessingOptionsState(0)
                            
//         //     // const sendCartApi = await fetch('https://hooks.zapier.com/hooks/catch/15795771/3s4mia1/', {
//         //     //     headers: {
//         //     //         "Content-Type": "application/json",
//         //     //     },
//         //     //     mode: "no-cors",
//         //     //     method: "POST",
//         //     //     body: JSON.stringify({
//         //     //         data: fileContents
//         //     //     })
//         //     // });

//         catch (error) {
//             console.error(error)
//             return res.status(403);
//         }
//     }
// }
// export default resolver;