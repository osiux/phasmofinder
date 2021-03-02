import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Global } from '@emotion/react';
import { GlobalStyles } from 'twin.macro';
import { useRouter } from 'next/router';

import * as gtag from '@app/ga';

import globalStyle from '@app/styles/globals';
import 'react-hint/css/index.css';

import { AppContextProvider } from '@app/contexts/AppContext';

const MyApp = ({ Component, pageProps }: AppProps) => {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url: URL) => {
			if (typeof window.gtag !== 'undefined') {
				gtag.pageview(url);
			}
		};

		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5,user-scalable=yes"
				/>
				<title>PhasmoFinder</title>
				<meta
					name="Description"
					content="Tool that helps you identify ghost type and optional objectives in the game Phasmophobia."
				/>
				<link
					rel="apple-touch-icon"
					sizes="57x57"
					href="/apple-icon-57x57.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="60x60"
					href="/apple-icon-60x60.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="72x72"
					href="/apple-icon-72x72.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="76x76"
					href="/apple-icon-76x76.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="114x114"
					href="/apple-icon-114x114.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="120x120"
					href="/apple-icon-120x120.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="144x144"
					href="/apple-icon-144x144.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="152x152"
					href="/apple-icon-152x152.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-icon-180x180.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="/android-icon-192x192.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="96x96"
					href="/favicon-96x96.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/manifest.json" />
				<meta name="msapplication-TileColor" content="#f9fafb" />
				<meta
					name="msapplication-TileImage"
					content="/ms-icon-144x144.png"
				/>
				<meta name="theme-color" content="#f9fafb" />
			</Head>
			<GlobalStyles />
			<Global styles={globalStyle} />
			<AppContextProvider>
				<Component {...pageProps} />
			</AppContextProvider>
		</>
	);
};

export default MyApp;
