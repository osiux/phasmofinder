import { createContext, useState } from 'react';
import * as R from 'ramda';

import type { EvidenceTypes } from '@app/config/evidenceTypes';
import type { ObjectiveTypes } from '@app/config/optionalObjectives';
import type { MapsTypes } from '@app/config/maps';

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
	map: MapsTypes | null;
	setMap: (map: MapsTypes | null) => void;
	reset: () => void;
};

const AppContext = createContext<AppContextType>(null);

export const AppContextProvider = ({ children }) => {
	const [name, setName] = useState('');
	const [answersTo, setAnswersTo] = useState<'everyone' | 'alone' | ''>('');
	const [objectives, setObjectives] = useState<ObjectiveTypes[]>([]);
	const [selected, setSelected] = useState<EvidenceTypes[]>([]);
	const [discarded, setDiscarded] = useState<EvidenceTypes[]>([]);
	const [map, setMap] = useState<MapsTypes | null>(null);

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
		setMap(null);
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
				map,
				setMap,
				reset,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppContext;
