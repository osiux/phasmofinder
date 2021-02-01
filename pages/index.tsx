import { useEffect } from 'react';
import tw from 'twin.macro';

import {
	EvidenceSelector,
	Footer,
	Ghosts,
	Navigation,
	Overview,
} from '@app/components';

import { AppContextProvider } from '@app/contexts/AppContext';

const Main = tw.main`container mx-auto prose-sm md:prose p-3 md:p-0`;

const Home = () => {
	useEffect(() => {
		if (
			typeof window !== 'undefined' &&
			'serviceWorker' in navigator &&
			// @ts-ignore
			window.workbox !== undefined
		) {
			// @ts-ignore
			const wb = window.workbox;

			const promptNewVersionAvailable = (event) => {
				if (
					confirm(
						'A newer version of this web app is available, reload to update?'
					)
				) {
					wb.addEventListener('controlling', (event) => {
						window.location.reload();
					});

					// Send a message to the waiting service worker, instructing it to activate.
					wb.messageSW({ type: 'SKIP_WAITING' });
				} else {
					console.log(
						'User rejected to reload the web app, keep using old version. New version will be automatically load when user open the app next time.'
					);
				}
			};

			wb.addEventListener('waiting', promptNewVersionAvailable);
			wb.addEventListener('externalwaiting', promptNewVersionAvailable);

			wb.register();
		}
	}, []);

	return (
		<AppContextProvider>
			<Navigation />
			<Main>
				<Overview />
				<EvidenceSelector />
				<Ghosts />
				<Footer />
			</Main>
		</AppContextProvider>
	);
};

export default Home;
