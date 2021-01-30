import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Global } from '@emotion/react';
import { GlobalStyles } from 'twin.macro';

import globalStyle from '@app/styles/globals';

const MyApp = ({ Component, pageProps }: AppProps) => (
	<>
		<Head>
			<meta charSet="utf-8" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta
				name="viewport"
				content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5,user-scalable=yes"
			/>
			<title>PhasmoFinder</title>
		</Head>
		<GlobalStyles />
		<Global styles={globalStyle} />
		<Component {...pageProps} />
	</>
);

export default MyApp;
