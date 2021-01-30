import tw from 'twin.macro';

const Main = tw.main`bg-blue-200`;

import { Layout, Navigation } from '@app/components'

const Home = () => {
	return (
		<Layout>
			<Navigation />
			<Main>
				Holi
			</Main>
		</Layout>
	);
};

export default Home;
