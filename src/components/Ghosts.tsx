import { useContext, useCallback } from 'react';
import tw, { styled } from 'twin.macro';

import EvidenceContext from '@app/contexts/EvidenceContext';

import { ghosts, evidenceTypes, EvidenceTypes } from '@app/config';

const GhostsSection = tw.section`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8`;
const GhostItem = tw.div`px-4 rounded-2xl bg-gray-200`;
const GhostName = tw.h2`font-bold text-xl text-center`;
const GhostEvidenceContainer = tw.div`flex flex-row justify-between`;
const GhostEvidenceItem = styled.span(({ matched }: { matched: boolean }) => [
	tw`rounded-2xl p-2 mx-0 lg:mx-2 first-of-type:ml-0`,
	matched && tw`text-green-500`,
]);

const Ghosts = () => {
	const { selected, discarded } = useContext(EvidenceContext);

	const matches = useCallback(
		(ghostEvidence: EvidenceTypes[]) => {
			if (selected.length === 0 && discarded.length === 0) return true;

			const isSelected = selected.every((item) =>
				ghostEvidence.includes(item)
			);

			const isDiscarded = discarded.some((item) =>
				ghostEvidence.includes(item)
			);

			return isSelected && !isDiscarded;
		},
		[selected, discarded]
	);

	return (
		<GhostsSection>
			{ghosts.map((ghost) => {
				const key = ghost.name.toLowerCase();

				const isMatch = matches(ghost.evidence);

				if (!isMatch) return null;

				return (
					<GhostItem key={key}>
						<GhostName>{ghost.name}</GhostName>
						<h3>Evidence</h3>
						<GhostEvidenceContainer>
							{ghost.evidence.map((item) => {
								const matched = selected.includes(item);
								const Icon = evidenceTypes[item].icon;

								return (
									<GhostEvidenceItem
										matched={matched}
										title={evidenceTypes[item].name}
									>
										<Icon size={40} />
									</GhostEvidenceItem>
								);
							})}
						</GhostEvidenceContainer>
						<h3>Strengths</h3>
						<p>{ghost.strengths}</p>
						<h3>Weaknesses</h3>
						<p>{ghost.weaknesses}</p>
					</GhostItem>
				);
			})}
		</GhostsSection>
	);
};

export default Ghosts;
