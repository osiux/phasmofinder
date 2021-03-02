import Image from 'next/image';
import tw from 'twin.macro';

import { Layout } from '@app/components';

import { maps, MapsTypes } from '@app/config/maps';

const Maps = () => (
	<Layout>
		<h1>Maps</h1>

		{Object.keys(maps).map((mapKey: MapsTypes) => {
			const map = maps[mapKey];

			return (
				<div key={`map-${mapKey}`}>
					<h2>{map.alt}</h2>
					<Image layout="responsive" {...map} />
				</div>
			);
		})}
	</Layout>
);

export default Maps;
