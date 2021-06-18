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
		evidence: ['writing', 'fingerprints', 'spiritbox'],
		strengths:
			'The spirit has no discernible strengths, however it is known to increase its hunting as your sanity drops.',
		weaknesses:
			'Using Smudge Sticks on a Spirit will stop it attacking for 180 seconds instead of 90.',
	},
	{
		name: 'Wraith',
		evidence: ['fingerprints', 'temperature', 'spiritbox'],
		strengths:
			'Almost never touch the ground. Footprint sounds from a wraith will be rare to non-existent, and they can travel directly through walls doors.',
		weaknesses:
			'Have a toxic reaction to Salt. If a Wraith comes into contact with a pile of salt, it will immediately cease attacking.',
	},
	{
		name: 'Phantom',
		evidence: ['emf', 'temperature', 'orb'],
		strengths: 'Looking at a Phantom will considerably drop your Sanity.',
		weaknesses:
			' Taking a photo of the Phantom will make it temporarily disappear. This, however, will not stop a Hunt.',
	},
	{
		name: 'Poltergeist',
		evidence: ['orb', 'fingerprints', 'spiritbox'],
		strengths:
			'Is capable of influencing more objects at once than any other Ghosts, and is capable of shutting multiple doors at once.',
		weaknesses: 'Is almost ineffective in an empty room. ',
	},
	{
		name: 'Banshee',
		evidence: ['emf', 'fingerprints', 'temperature'],
		strengths:
			'Wll focus on one player at a time until it kills them or the player leaves the building.',
		weaknesses:
			'Fear the Crucifix, which boosts the Hunt-stopping range of one from 3 meters to 5 meters against it.',
	},
	{
		name: 'Jinn',
		evidence: ['emf', 'orb', 'spiritbox'],
		strengths: 'Will travel at a faster speed if its victim is far away.',
		weaknesses:
			"Turning off the location's power source will prevent the Jinn from using its ability.",
	},
	{
		name: 'Mare',
		evidence: ['temperature', 'orb', 'spiritbox'],
		strengths:
			' Increased chance to attack in the dark. As such, it will do what it can to achieve this, such as turning off lights and tripping the fuse box.',
		weaknesses: 'Turning the lights on will lower its chance to attack.',
	},
	{
		name: 'Revenant',
		evidence: ['emf', 'fingerprints', 'writing'],
		strengths:
			'Will travel at a significantly faster speed when hunting a victim. Additionally, can freely switch whoever it is targeting during a Hunt.',
		weaknesses:
			'Hiding from the Revenant will cause it to move very slowly.',
	},
	{
		name: 'Shade',
		evidence: ['emf', 'orb', 'writing'],
		strengths:
			'As a shy ghost, a Shade will rarely perform actions in the presence of two or more people, making it harder to detect.',
		weaknesses:
			'Conversely, a Shade will rarely start a Hunt when players are grouped together.',
	},
	{
		name: 'Demon',
		evidence: ['temperature', 'writing', 'spiritbox'],
		strengths: 'Demons are the most aggressive and enter hunt mode more.',
		weaknesses:
			"Asking a Demon successful questions on the Ouija Board won't lower the user's sanity.",
	},
	{
		name: 'Yurei',
		evidence: ['temperature', 'orb', 'writing'],
		strengths:
			"Yurei have been known to have a stronger effect on people's Sanity during a manifestation.",
		weaknesses:
			'Using Smudge Sticks on the Yurei will cause it to not wander around the location for ~90 seconds.',
	},
	{
		name: 'Oni',
		evidence: ['emf', 'writing', 'spiritbox'],
		strengths:
			'Oni are more active when people are nearby and have been seen moving objects at great speed.',
		weaknesses:
			'Being more active will make the Oni easier to find and identify.',
	},
	{
		name: 'Yokai',
		evidence: ['spiritbox', 'writing', 'orb'],
		strengths:
			'Talking near a Yokai will anger it and cause it to attack more often.',
		weaknesses: 'While hunting, it can only hear voices close to it.',
	},
	{
		name: 'Hantu',
		evidence: ['fingerprints', 'writing', 'orb'],
		strengths: 'Moves faster in colder areas.',
		weaknesses: 'Moves slower in warmer areas.',
	},
];
