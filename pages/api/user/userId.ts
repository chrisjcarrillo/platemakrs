import { ipAddress } from "@vercel/edge";
// import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from 'next/server'

export const config = { 
    runtime:'edge',
};

async function resolver(
    req: NextRequest, 
    res: NextResponse
){
    console.info('Geo?: ', req.geo);
    if (req.method == 'POST') {
        try {
            return new Response(
                JSON.stringify({                
                    ip: req?.headers.get('x-real-ip') || ipAddress(req) || "unknown",
                    userAgent: req.headers.get('user-agent'),
                    state: req.geo?.region || req.headers.get('x-vercel-ip-country-region') || 'FL',
                    country: req.geo?.country || req.headers.get('x-vercel-ip-country') || 'US',
                    city: req?.geo?.city || req.headers.get('x-vercel-ip-city') || 'Miami',
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