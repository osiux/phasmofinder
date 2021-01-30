import { createContext, useState, Dispatch, SetStateAction } from 'react';
import * as R from 'ramda';

import type { EvidenceTypes } from '@app/config';

type EvidenceContextType = {
	name: string;
	setName: (name: string) => void;
	answersTo: 'everyone' | 'alone' | '';
	setAnswersTo: Dispatch<SetStateAction<'everyone' | 'alone' | ''>>;
	objectives: string[];
	assignObjectives: (objective: string) => void;
	assignEvidence: (evidence: EvidenceTypes) => void;
	selected: EvidenceTypes[];
	discarded: EvidenceTypes[];
	reset: () => void;
};

const EvidenceContext = createContext<EvidenceContextType>(null);

export const EvidenceContextProvider = ({ children }) => {
	const [name, setName] = useState('');
	const [answersTo, setAnswersTo] = useState<'everyone' | 'alone' | ''>('');
	const [objectives, setObjectives] = useState<string[]>([]);
	const [selected, setSelected] = useState<EvidenceTypes[]>([]);
	const [discarded, setDiscarded] = useState<EvidenceTypes[]>([]);

	const assignObjectives = (objective: string) => {
		if (objectives.includes(objective)) {
			setObjectives(R.without([objective]));
		} else {
			setObjectives(R.append(objective));
		}
	};

	const assignEvidence = (evidence: EvidenceTypes) => {
		if (selected.includes(evidence)) {
			setDiscarded(R.append(evidence));
			setSelected(R.without([evidence]));
		} else if (discarded.includes(evidence)) {
			setDiscarded(R.without([evidence]));
		} else {
			setSelected(R.append(evidence));
		}
	};

	const reset = () => {
		setName('');
		setAnswersTo('');
		setObjectives([]);
		setSelected([]);
		setDiscarded([]);
	};

	return (
		<EvidenceContext.Provider
			value={{
				name,
				setName,
				answersTo,
				setAnswersTo,
				objectives,
				assignObjectives,
				selected,
				discarded,
				assignEvidence,
				reset,
			}}
		>
			{children}
		</EvidenceContext.Provider>
	);
};

export default EvidenceContext;
