import { ipAddress } from "@vercel/edge";
import { NextApiRequest, NextApiResponse } from "next";

export const config = { 
    runtime:'edge',
};

async function resolver(
    req: Request, 
    res: NextApiResponse
){
    if (req.method == 'POST') {
        try {
            return new Response(
                JSON.stringify({                
                    ip: ipAddress(req) || "unknown",
                    userAgent: req.headers.get('user-agent'),
                }),
                {
                    status: 200,
                    headers: {
                        'Content-Type': "application/json"
                    }
                }
            );
        } catch (error: any) {
            return new Response(
                JSON.stringify({ error: error?.message }),
                {
                    status: 500,
                    headers: {
                        'Content-Type': "application/json"
                    }
                }
            );
        }
    }
}
export default resolver;