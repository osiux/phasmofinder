import tw from 'twin.macro';

import { Filters, Footer, Ghosts, Navigation } from '@app/components';

import { EvidenceContextProvider } from '@app/contexts/EvidenceContext';

const Main = tw.main`container mx-auto prose-sm md:prose p-3 md:p-0`;

const Home = () => (
	<EvidenceContextProvider>
		<Navigation />
		<Main>
			<Filters />
			<Ghosts />
			<Footer />
		</Main>
	</EvidenceContextProvider>
);

export default Home;