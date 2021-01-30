import tw from 'twin.macro';

const Main = tw.main`bg-blue-200`;

import { Layout, Navigation } from '@app/components'

import { evidence, EvidenceTypes } from '@app/config';

const Home = () => {
	return (
		<Layout>
			<Navigation />
			<Main>
				{Object.keys(evidence).map((item: EvidenceTypes) => {
					const Icon = evidence[item].icon;

					return (
						<span>
							<Icon size={30} />
							{evidence[item].name}
						</span>
					)
				})}
			</Main>
		</Layout>
	);
};

export default Home;
