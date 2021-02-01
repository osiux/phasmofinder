import { createContext, useState } from 'react';
import * as R from 'ramda';

import type { EvidenceTypes, ObjectiveTypes } from '@app/config';

type AppContextType = {
	name: string;
	setName: (name: string) => void;
	answersTo: 'everyone' | 'alone' | '';
	setAnswersTo: (answersTo: 'everyone' | 'alone' | '') => void;
	objectives: string[];
	assignObjectives: (objective: ObjectiveTypes) => void;
	assignEvidence: (evidence: EvidenceTypes) => void;
	selected: EvidenceTypes[];
	discarded: EvidenceTypes[];
	reset: () => void;
};

const AppContext = createContext<AppContextType>(null);

export const AppContextProvider = ({ children }) => {
	const [name, setName] = useState('');
	const [answersTo, setAnswersTo] = useState<'everyone' | 'alone' | ''>('');
	const [objectives, setObjectives] = useState<ObjectiveTypes[]>([]);
	const [selected, setSelected] = useState<EvidenceTypes[]>([]);
	const [discarded, setDiscarded] = useState<EvidenceTypes[]>([]);

	const assignObjectives = (objective: ObjectiveTypes) => {
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
		<AppContext.Provider
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
		</AppContext.Provider>
	);
};

export default AppContext;
