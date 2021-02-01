import { useContext } from 'react';
import tw, { styled } from 'twin.macro';

import { evidenceTypes, EvidenceTypes } from '@app/config';
import AppContext from '@app/contexts/AppContext';
import Heading from './Heading';

const EvidenceSection = tw.section`flex items-start justify-between mt-6 flex-wrap`;
const EvidenceItem = styled.button(
	({ selected, discarded }: { selected?: boolean; discarded?: boolean }) => [
		tw`border-gray-200 flex flex-col items-center align-middle p-2 outline-none rounded-xl hover:shadow-md focus:outline-none`,
		selected && tw`text-green-600`,
		discarded && tw`text-red-600`,
	]
);

const EvidenceSelector = () => {
	const { assignEvidence, selected, discarded } = useContext(AppContext);

	return (
		<>
			<Heading
				title="Evidence"
				description="One click to select (display all ghosts that requires this evidence), another one to discard (exclude all ghosts that requires this evidence)."
			/>
			<EvidenceSection>
				{Object.keys(evidenceTypes).map((evidence: EvidenceTypes) => {
					const Icon = evidenceTypes[evidence].icon;

					const onClick = () => assignEvidence(evidence);
					const isSelected = selected.includes(evidence);
					const isDiscarded = discarded.includes(evidence);

					return (
						<EvidenceItem
							key={evidence}
							selected={isSelected}
							discarded={isDiscarded}
							onClick={onClick}
						>
							<Icon size={30} />
							{evidenceTypes[evidence].name}
						</EvidenceItem>
					);
				})}
			</EvidenceSection>
		</>
	);
};

export default EvidenceSelector;
