import { useState, useContext } from 'react';
import tw, { styled } from 'twin.macro';

import { evidenceTypes, EvidenceTypes } from '@app/config';
import EvidenceContext from '@app/contexts/EvidenceContext';

const Section = tw.section`grid grid-cols-1 md:grid-cols-5 gap-6 items-start`;
const Label = tw.span`font-bold text-gray-700 mb-1`;
const Input = tw.input`block w-full p-1 bg-gray-100 border-0 border-b-2 border-l-2 border-gray-300  mt-1 focus:(ring-0 border-black outline-none)`;
const ButtonGroup = tw.span`relative z-0 inline-flex shadow-sm`;
const AnswersToButton = styled.button(
	({ selected }: { selected?: boolean }) => [
		tw`outline-none relative inline-flex items-center p-2 border text-gray-700 border-gray-300 bg-gray-100 leading-5 font-medium rounded-md hover:(bg-gray-700 text-white) -ml-px first:ml-auto rounded-r-none rounded-l-none first-of-type:rounded-l-md last-of-type:rounded-r-md focus:outline-none`,
		selected && tw`bg-gray-700 text-white border-gray-700`,
	]
);
const ResetButton = tw.button`block bg-gray-500 text-gray-50 w-full rounded mt-8 p-1`;
const EvidenceSection = tw.section`flex items-start justify-between mt-6 flex-wrap md:flex-nowrap`;
const EvidenceItem = styled.button(
	({ selected, discarded }: { selected?: boolean; discarded?: boolean }) => [
		tw`border-gray-200 flex flex-col items-center align-middle p-2 outline-none rounded-xl hover:shadow-md focus:outline-none`,
		selected && tw`text-green-600`,
		discarded && tw`text-red-600`,
	]
);

const Filter = () => {
	const { assignEvidence, selected, discarded, reset } = useContext(
		EvidenceContext
	);
	const [name, setName] = useState('');
	const [answersTo, setAnswersTo] = useState<'everyone' | 'alone' | ''>('');

	const onReset = () => {
		setName('');
		setAnswersTo('');
		reset();
	};

	return (
		<>
			<Section>
				<label tw="block col-span-3">
					<Label>Ghost Name:</Label>
					<Input
						type="text"
						name="name"
						autoComplete="off"
						tabIndex={1}
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</label>
				<div tw="block">
					<Label tw="block">Answers:</Label>
					<ButtonGroup>
						<AnswersToButton
							selected={answersTo === 'everyone'}
							onClick={() => setAnswersTo('everyone')}
						>
							Everyone
						</AnswersToButton>
						<AnswersToButton
							selected={answersTo === 'alone'}
							onClick={() => setAnswersTo('alone')}
						>
							Alone
						</AnswersToButton>
					</ButtonGroup>
				</div>
				<ResetButton onClick={onReset}>Reset</ResetButton>
			</Section>

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

export default Filter;
