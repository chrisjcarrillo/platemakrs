declare const window: {
    fbq: any;
} & Window;

export const FB_PIXEL_ID = '1221673915381910';
export const FB_PIXEL_ID_V2 = '1164870334758519';

export const pageview = (event_id: string, pixel_id: string) => {
    window?.fbq?.('track', 'PageView', {
        eventID: event_id
    }, pixel_id)
}

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name: string, options: any, eventId: string) => {
    window?.fbq?.('track', name, options, {eventID: eventId})
}

export const event2 = (name: string, options: any, eventId: string) => {
    window?.fbq?.('track', name, options, {eventID: eventId})
}