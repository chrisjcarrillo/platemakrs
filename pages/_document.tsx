import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';
import { GoogleTag } from '../lib/pixels/google';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Platemakrs" />
                <meta property="og:description" content="Platemakrs. Transform your license plate in our custom license plate editor, ship us your license plate, bring your design to life!" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
                <GoogleTag />
            </Head>
            <body>
                <Script
                    id="img"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `!function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '1221673915381910');
                        fbq('track', 'PageView');`,
                    }}
                />
                {/* <noscript>
                    <img height="1" width="1" style={{ display: "none" }}
                    src="https://www.facebook.com/tr?id=1221673915381910&ev=PageView&noscript=1"
                /></noscript> */}
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
