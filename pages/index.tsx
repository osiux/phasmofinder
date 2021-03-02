import { EvidenceSelector, Ghosts, Layout, Overview } from '@app/components';

const Home = () => (
	<Layout>
		<Overview />
		<EvidenceSelector />
		<Ghosts />
	</Layout>
);

export default Home;
