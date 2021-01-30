import { createContext, useState } from 'react';
import * as R from 'ramda';

import type { EvidenceTypes } from '@app/config';

type EvidenceContextType = {
	assignEvidence: (evidence: EvidenceTypes) => void;
	selected: EvidenceTypes[];
	discarded: EvidenceTypes[];
	reset: () => void;
};

const EvidenceContext = createContext<EvidenceContextType>(null);

export const EvidenceContextProvider = ({ children }) => {
	const [selected, setSelected] = useState<EvidenceTypes[]>([]);
	const [discarded, setDiscarded] = useState<EvidenceTypes[]>([]);

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
		setSelected([]);
		setDiscarded([]);
	};

	return (
		<EvidenceContext.Provider
			value={{
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
