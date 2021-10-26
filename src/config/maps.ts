import Tanglewood from '@app/images/tanglewood.png';
import Edgefield from '@app/images/edgefield.png';
import Ridgeview from '@app/images/ridgeview.png';
import Willow from '@app/images/willow.png';
import Grafton from '@app/images/grafton.png';
import Bleasdale from '@app/images/bleasdale.png';
import Brownstone from '@app/images/brownstone.png';
import Prison from '@app/images/prison.png';
import Campsite from '@app/images/campsite.png';
import Asylum from '@app/images/asylum.png';

export type MapsTypes = keyof typeof maps;

export const maps = {
	tanglewood: {
		alt: 'Tanglewood Street House',
		src: Tanglewood,
	},
	edgefield: {
		alt: 'Edgefield Street House',
		src: Edgefield,
	},
	ridgeview: {
		alt: 'Ridgeview Road House',
		src: Ridgeview,
	},
	willow: {
		alt: 'Willow Street House',
		src: Willow,
	},
	grafton: {
		alt: 'Grafton Farmhouse',
		src: Grafton,
	},
	bleasdale: {
		alt: 'Bleasdale Farmhouse',
		src: Bleasdale,
	},
	brownstone: {
		alt: 'Brownstone High School',
		src: Brownstone,
	},
	prison: {
		alt: 'Prison',
		src: Prison,
	},
	campsite: {
		alt: 'Maple Lodge Campsite',
		src: Campsite,
	},
	asylum: {
		alt: 'Asylum',
		src: Asylum,
	},
};
