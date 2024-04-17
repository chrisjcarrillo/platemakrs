import '../styles/globals.scss';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import EditorProvider from '../context/editorContext';
import StoreProvider from '../context/storeContext';
import InterfaceProvider from '../context/interfaceContext';
import { Analytics } from '@vercel/analytics/react';
import { EditorHeader } from '../components/Editor/EditorHeader/EditorHeader';
import * as fbq from '../lib/facebook/pixel';
import { Main } from '../components/shared/SEO/Main';
import Script from 'next/script';
import { v4 as uuidv4 } from 'uuid';
import { Container } from 'react-bootstrap';
import { LoadingSpinner } from '../components/shared/LoadingSpinner/LoadingSpinner';
import { Cart } from '../components/shared/Cart/Cart';
import Hotjar from '@hotjar/browser';
import Footer from '../components/shared/Footer/Footer';

export default function App({ Component, pageProps }: AppProps) {

	useEffect(() => {
		Hotjar.init(3872346, 6);
		const setEventId = async () => {
			try {
				const eventIdData = await fetch('/api/user/userId', {
					headers: {
						"Content-Type": "application/json",
					},
					method: "POST",
				});
				const eventData = await eventIdData.json();
				const urlQueryParamsMain = new URLSearchParams(window.location.search)
				if (eventData) {
					const generateBaddID = uuidv4();
					const eventId = "PM_" + generateBaddID;
					const customId = uuidv4();

					sessionStorage.setItem('customId', customId)
					sessionStorage.setItem('page_fbEventId', eventId);
					sessionStorage.setItem('ipAddress', eventData.ip);
					sessionStorage.setItem('userAgent', eventData.userAgent);
					if (
						!urlQueryParamsMain.get("c")
					) {
						fbq.pageview(eventData.uuid);
					}
				}
			} catch (error) {
				console.log(error);
			}
		}
		setEventId();
	}, []);

	return (
		<InterfaceProvider>
			<Main />
			<Script
				id="facebook"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
						!function(f,b,e,v,n,t,s)
						{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
						n.callMethod.apply(n,arguments):n.queue.push(arguments)};
						if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
						n.queue=[];t=b.createElement(e);t.async=!0;
						t.src=v;s=b.getElementsByTagName(e)[0];
						s.parentNode.insertBefore(t,s)}(window, document,'script',
						'https://connect.facebook.net/en_US/fbevents.js');
						fbq('init', ${fbq.FB_PIXEL_ID});
					`,
				}}
			/>
			<StoreProvider>
				<EditorProvider>
					{/* { pageProps !== 'editor' && <Header {...pageProps} /> } */}
					<EditorHeader />
						<LoadingSpinner>
							<Cart />
							<Component {...pageProps} />
						</LoadingSpinner>

					<Footer />
					<Analytics />
				</EditorProvider>
			</StoreProvider>
		</InterfaceProvider>
	)
}
