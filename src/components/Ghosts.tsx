import { useContext, useCallback } from 'react';
import tw, { styled } from 'twin.macro';

import AppContext from '@app/contexts/AppContext';

import { ghosts } from '@app/config/ghosts';
import { evidenceTypes, EvidenceTypes } from '@app/config/evidenceTypes';

const GhostsSection = tw.section`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8`;
const GhostItem = tw.div`px-4 rounded-2xl bg-gray-200`;
const GhostName = tw.a`font-bold text-xl text-center mt-2!`;
const GhostEvidenceContainer = tw.div`flex flex-row justify-between`;
const GhostEvidenceItem = styled.span(({ matched }: { matched: boolean }) => [
	tw`rounded-2xl p-2 mx-0 lg:mx-2 first-of-type:ml-0`,
	matched && tw`text-green-500`,
]);

const Ghosts = () => {
	const { selected, discarded } = useContext(AppContext);

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
					<GhostItem key={key} data-testid="ghost-item">
						<h3 tw="text-center">
							<GhostName
								target="_blank"
								rel="noopener noreferrer"
								href={`https://phasmophobia.fandom.com/wiki/${ghost.name}`}
							>
								{ghost.name}
							</GhostName>
						</h3>
						<h4>Evidence</h4>
						<GhostEvidenceContainer>
							{ghost.evidence.map((item) => {
								const matched = selected.includes(item);
								const Icon = evidenceTypes[item].icon;

								return (
									<GhostEvidenceItem
										key={item}
										matched={matched}
										title={evidenceTypes[item].name}
									>
										<Icon size={40} />
									</GhostEvidenceItem>
								);
							})}
						</GhostEvidenceContainer>
						<h4>Strengths</h4>
						<p>{ghost.strengths}</p>
						<h4>Weaknesses</h4>
						<p>{ghost.weaknesses}</p>
					</GhostItem>
				);
			})}
		</GhostsSection>
	);
};

export default Ghosts;
