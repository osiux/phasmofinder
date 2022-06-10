import type { EvidenceTypes } from './evidenceTypes';

export type Ghost = {
	name: string;
	evidence: EvidenceTypes[];
	strengths: string;
	weaknesses: string;
};

export const ghosts: Ghost[] = [
	{
		name: 'Spirit',
		evidence: ['emf', 'spiritbox', 'writing'],
		strengths:
			'The spirit has no discernible strengths, however it is known to increase its hunting as your sanity drops.',
		weaknesses:
			'Using Smudge Sticks on a Spirit will stop it attacking for 180 seconds instead of 90.',
	},
	{
		name: 'Wraith',
		evidence: ['emf', 'spiritbox', 'dots'],
		strengths:
			'Almost never touch the ground. Footprint sounds from a wraith will be rare to non-existent, and they can travel directly through walls doors.',
		weaknesses:
			'Have a toxic reaction to Salt. If a Wraith comes into contact with a pile of salt, it will immediately cease attacking.',
	},
	{
		name: 'Phantom',
		evidence: ['spiritbox', 'fingerprints', 'dots'],
		strengths: 'Looking at a Phantom will considerably drop your Sanity.',
		weaknesses:
			' Taking a photo of the Phantom will make it temporarily disappear. This, however, will not stop a Hunt.',
	},
	{
		name: 'Poltergeist',
		evidence: ['spiritbox', 'fingerprints', 'writing'],
		strengths:
			'Is capable of influencing more objects at once than any other Ghosts, and is capable of shutting multiple doors at once.',
		weaknesses: 'Is almost ineffective in an empty room. ',
	},
	{
		name: 'Banshee',
		evidence: ['fingerprints', 'orb', 'dots'],
		strengths:
			'Wll focus on one player at a time until it kills them or the player leaves the building.',
		weaknesses:
			'Fear the Crucifix, which boosts the Hunt-stopping range of one from 3 meters to 5 meters against it.',
	},
	{
		name: 'Jinn',
		evidence: ['emf', 'fingerprints', 'temperature'],
		strengths: 'Will travel at a faster speed if its victim is far away.',
		weaknesses:
			"Turning off the location's power source will prevent the Jinn from using its ability.",
	},
	{
		name: 'Mare',
		evidence: ['spiritbox', 'orb', 'writing'],
		strengths:
			' Increased chance to attack in the dark. As such, it will do what it can to achieve this, such as turning off lights and tripping the fuse box.',
		weaknesses: 'Turning the lights on will lower its chance to attack.',
	},
	{
		name: 'Revenant',
		evidence: ['orb', 'writing', 'temperature'],
		strengths:
			'Will travel at a significantly faster speed when hunting a victim. Additionally, can freely switch whoever it is targeting during a Hunt.',
		weaknesses:
			'Hiding from the Revenant will cause it to move very slowly.',
	},
	{
		name: 'Shade',
		evidence: ['emf', 'writing', 'temperature'],
		strengths:
			'As a shy ghost, a Shade will rarely perform actions in the presence of two or more people, making it harder to detect.',
		weaknesses:
			'Conversely, a Shade will rarely start a Hunt when players are grouped together.',
	},
	{
		name: 'Demon',
		evidence: ['fingerprints', 'writing', 'temperature'],
		strengths: 'Demons are the most aggressive and enter hunt mode more.',
		weaknesses:
			"Demons will take less sanity when answering through a Quija Board.",
	},
	{
		name: 'Yurei',
		evidence: ['orb', 'temperature', 'dots'],
		strengths:
			"Yurei have been known to have a stronger effect on people's Sanity during a manifestation.",
		weaknesses:
			'Using Smudge Sticks on the Yurei will cause it to not wander around the location for ~90 seconds.',
	},
	{
		name: 'Oni',
		evidence: ['emf', 'temperature', 'dots'],
		strengths:
			'Oni are more active when people are nearby and have been seen moving objects at great speed.',
		weaknesses:
			'Being more active will make the Oni easier to find and identify.',
	},
	{
		name: 'Hantu',
		evidence: ['fingerprints', 'orb', 'temperature'],
		strengths: 'Moves faster in colder areas.',
		weaknesses: 'Moves slower in warmer areas.',
	},
	{
		name: 'Yokai',
		evidence: ['spiritbox', 'orb', 'dots'],
		strengths:
			'Talking near a Yokai will anger it and cause it to attack more often.',
		weaknesses: 'While hunting, it can only hear voices close to it.',
	},
	{
		name: 'Goryo',
		evidence: ['emf', 'fingerprints', 'dots'],
		strengths: 'Will usually only show itself on camera if there are no people nearby.',
		weaknesses: 'They are rarely seen far from their place of death.',
	},
	{
		name: 'Myling',
		evidence: ['emf', 'fingerprints', 'writing'],
		strengths: 'Is known to be quieter when hunting.',
		weaknesses: 'More frequently make paranormal sounds.',
	},
	{
		name: 'Onryo',
		evidence: ['spiritbox', 'orb', 'temperature'],
		strengths: 'Extinguishing a flame can cause an Onryo to attack.',
		weaknesses: 'When threatened, this ghost will be less likely to hunt.',
	},
	{
		name: 'The Twins',
		evidence: ['emf', 'spiritbox', 'temperature'],
		strengths: 'Either Twin can be angered and initiate an attack on their prey.',
		weaknesses: 'The Twins will often interact with the environment at the same time.',
	},
	{
		name: 'Raiju',
		evidence: ['emf', 'orb', 'dots'],
		strengths: 'Can siphon power from nearby electrical devices, making it move faster.',
		weaknesses: 'Are constantly disrupting electronic equipment, making it easier to track when attacking.',
	},
	{
		name: 'Obake',
		evidence: ['emf', 'fingerprints', 'orb'],
		strengths: 'When interacting with the environment, an Obake will rarely leave a trace.',
		weaknesses: 'Sometimes this ghost will shapeshift, leaving behind unique evidence.',
	},
	{
		name: 'The Mimic',
		evidence: ['spiritbox', 'fingerprints', 'temperature', 'orb'],
		strengths: 'We are unsure of what this ghost is capable of. Be careful.',
		weaknesses: 'Several reports have noted ghost orbs sightings near mimics.',
	},
	{
		name: 'Moroi',
		evidence: ['spiritbox', 'writing', 'temperature'],
		strengths: 'The weaker their victims, the stronger the Morai becomes.',
		weaknesses: 'Moroi suffers from hyperosmia, weaking them for longer periods.',
	},
	{
		name: 'Deogen',
		evidence: ['spiritbox', 'writing', 'dots'],
		strengths: 'Deogen constantly sense the living. You can run but you can\'t hide.',
		weaknesses: 'Deogen require a lot of energy to form and will move very slowly.',
	},
	{
		name: 'Thaye',
		evidence: ['orb', 'writing', 'dots'],
		strengths: 'Upon entering the location, Thaye will become active, defensive and agile.',
		weaknesses: 'Thaye will weaken over time, making them weaker, slower and less aggressive.',
	},
];
