import { useContext } from 'react';
import Image from 'next/image';
import tw, { styled } from 'twin.macro';

import { Layout } from '@app/components';

import { maps, MapsTypes } from '@app/config/maps';
import AppContext from '@app/contexts/AppContext';

const ButtonsContainer = tw.div`grid grid-cols-4 grid-rows-2 gap-2`;
const MapButton = styled.button(({ selected }: { selected?: boolean }) => [
	tw`text-gray-700 py-1 px-5 mt-2 bg-gray-200 rounded-lg focus:outline-none`,
	selected && tw`bg-gray-700 text-white border-gray-700`,
]);

const Maps = () => {
	const { map, setMap } = useContext(AppContext);

	return (
		<Layout>
			<h1>Maps</h1>

			<p>This awesome maps are provided by <a href="https://imgur.com/a/iEI0tJo">Fantismal</a>, Thanks a lot!</p>

			<ButtonsContainer>
				{Object.keys(maps).map((mapKey: MapsTypes) => {
					const currentMap = maps[mapKey];

					const onClick = () => setMap(mapKey);

					return (
						<MapButton
							key={mapKey}
							selected={map === mapKey}
							onClick={onClick}
						>
							{currentMap.alt}
						</MapButton>
					);
				})}
			</ButtonsContainer>

			{map && (
				<div>
					<h2>{maps[map].alt}</h2>
					<Image
						layout="responsive"
						placeholder="blur"
						{...maps[map]}
						alt={maps[map].alt}
					/>
				</div>
			)}
		</Layout>
	);
};

export default Maps;
