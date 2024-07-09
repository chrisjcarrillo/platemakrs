import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';
import { GoogleAnalytics, GoogleTag } from '../lib/pixels/google';

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
                <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11418187763"></script>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <GoogleTag />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-52EHMW9BFY"></script>
                <meta name="google-site-verification" content="4sUNv0Dw_cKFHDBTv8wq773BltPcNtArXWHnLQCsoa4" />
                <GoogleAnalytics />
            </Head>
            <body>

                {/* 2.0 Pixel */}
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
                        fbq('init', '1164870334758519', {}, 'pixel_v2');
                        fbq('track', 'PageView', {}, 'pixel_v2');
                        fbq('init', '1221673915381910', {}, 'pixel_v1');
                        fbq('track', 'PageView', {}, 'pixel_v1');
                        `
                    }}
                />


                <Script id="google-tag-manager" strategy="afterInteractive">
                    {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-K4KX942C');
      `}
                </Script>
                {/* <noscript>
                    <img height="1" width="1" style={{ display: "none" }}
                    src="https://www.facebook.com/tr?id=1221673915381910&ev=PageView&noscript=1"
                /></noscript> */}
                <Main />
                <NextScript />
                <noscript
                    dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K4KX942C" height="0" width="0" style="display: none; visibility: hidden;" />`,
                    }}
                />
            </body>
        </Html>
    )
}
