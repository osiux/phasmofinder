import {
	GiFingerPrint,
	GiPocketRadio,
	GiBookCover,
	GiThermometerCold,
	GiLaserSparks,
	GiMovementSensor,
	GiOrbitalRays
} from 'react-icons/gi';

export type EvidenceTypes = keyof typeof evidenceTypes;

export const evidenceTypes = {
	emf: {
		name: 'EMF Level 5',
		icon: GiMovementSensor,
	},
	temperature: {
		name: 'Freezing Temperatures',
		icon: GiThermometerCold,
	},
	fingerprints: {
		name: 'Ultraviolet',
		icon: GiFingerPrint,
	},
	writing: {
		name: 'Ghost Writing',
		icon: GiBookCover,
	},
	spiritbox: {
		name: 'Spirit Box',
		icon: GiPocketRadio,
	},
	orb: {
		name: 'Ghost Orb',
		icon: GiLaserSparks,
	},
	dots: {
		name: 'D.O.T.S. Projector',
		icon: GiOrbitalRays,
	},
};
