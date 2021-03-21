export type ObjectiveTypes = keyof typeof optionalObjectives;

export const optionalObjectives = {
	emf: {
		name: 'EMF',
		description: 'Find evidence of the paranormal with an EMF Reader',
	},
	temperature: {
		name: 'Temperature',
		description:
			'Detect a room below 10 Celsius/50 Fahrenheit with a Thermometer',
	},
	sink: {
		name: 'Sink',
		description: 'Capture a photo of Dirty Water in a sink',
	},
	photo: {
		name: 'Photo',
		description: 'Capture a photo of the Ghost',
	},
	motion: {
		name: 'Motion',
		description: 'Detect a Ghosts presence with a Motion Sensor',
	},
	crucifix: {
		name: 'Crucifix',
		description: 'Prevent the Ghost from hunting with a Crucifix',
	},
	event: {
		name: 'Event',
		description: 'Have a member of your team witness a Ghost Event',
	},
	smudge: {
		name: 'Smudge',
		description: 'Cleanse the area near the Ghost using Smudge Sticks',
	},
	salt: {
		name: 'Salt',
		description: 'Get a Ghost to walk through Salt',
	},
	candle: {
		name: '[BETA] Candle',
		description: 'Detect a Ghost presence with a Candle',
	},
	parabolicMic: {
		name: '[BETA] Parabolic Mic',
		description: 'Detect Ghost footsteps with a Parabolic Mic during a hunt',
	},
	escape: {
		name: '[BETA] Escape',
		description: 'Intermediate and Professional: Escape the Ghost during a hunt with no deaths',
	},
	smudgeHunt: {
		name: '[BETA] Smudge during Hunt',
		description: 'Professional: Use a smudge stick while the ghost is hunting a player',
	},
	sanity: {
		name: '[BETA] Avg. Sanity',
		description: 'Multiplayer: Get an average sanity below 25%',
	},
};
