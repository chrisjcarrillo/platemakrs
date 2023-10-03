import Head from 'next/head';
import Script from 'next/script';
export const Main = () => {    
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
            <Script async defer src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"></Script>
        </Head>
    )
}