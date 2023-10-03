declare const window: {
    fbq: any;
} & Window;

export const FB_PIXEL_ID = '1221673915381910';

export const pageview = (event_id: string) => {
    window?.fbq?.('track', 'PageView', {
        eventID: event_id
    })
}

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name: string, options: any, eventId: string) => {
    window?.fbq?.('track', name, options, {eventID: eventId})
}