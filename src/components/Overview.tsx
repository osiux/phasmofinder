import React, { useContext } from 'react';
import tw, { styled } from 'twin.macro';
import ReactHintFactory from 'react-hint';

import AppContext from '@app/contexts/AppContext';
import {
	optionalObjectives,
	ObjectiveTypes,
} from '@app/config/optionalObjectives';

import Heading from './Heading';

const Section = tw.section`grid grid-cols-1 md:grid-cols-5 gap-6 items-start`;
const Label = tw.span`font-bold text-gray-700 mb-1`;
const Input = tw.input`block w-full p-1 bg-gray-100 border-0 border-b-2 border-l-2 border-gray-300  mt-1 focus:(ring-0 border-black outline-none)`;
const ButtonGroup = tw.span`relative z-0 inline-flex shadow-sm`;
const Button = styled.button(({ selected }: { selected: boolean }) => [
	tw`outline-none relative inline-flex items-center p-2 border text-gray-700 border-gray-300 bg-gray-100 leading-5 font-medium rounded-md hover:(bg-gray-700 text-white) -ml-px first-of-type:ml-auto rounded-r-none rounded-l-none first-of-type:rounded-l-md last-of-type:rounded-r-md focus:outline-none`,
	selected && tw`bg-gray-700 text-white border-gray-700`,
]);
const ResetButton = tw.button`block bg-gray-500 text-gray-50 w-full rounded mt-8 p-1`;
const ObjectivesContainer = tw.section`flex justify-between flex-wrap`;
const ObjectiveButton = styled.button(({ selected }: { selected: boolean }) => [
	tw`text-gray-700 py-1 px-5 mt-2 bg-gray-200 rounded-lg focus:outline-none`,
	selected && tw`bg-gray-700 text-white border-gray-700`,
]);

const ReactHint = ReactHintFactory(React);

const Overview = () => {
	const {
		name,
		setName,
		answersTo,
		setAnswersTo,
		objectives,
		assignObjectives,
		reset,
	} = useContext(AppContext);

	return (
		<>
			<ReactHint autoPosition events delay />
			<Section>
				<label tw="block col-span-3">
					<Label>Ghost Name:</Label>
					<Input
						type="text"
						name="name"
						autoComplete="off"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</label>
				<div tw="block">
					<Label tw="block">Answers:</Label>
					<ButtonGroup>
						<Button
							selected={answersTo === 'everyone'}
							onClick={() => setAnswersTo('everyone')}
						>
							Everyone
						</Button>
						<Button
							selected={answersTo === 'alone'}
							onClick={() => setAnswersTo('alone')}
						>
							Alone
						</Button>
					</ButtonGroup>
				</div>
				<ResetButton onClick={reset}>Reset</ResetButton>
			</Section>
			<Heading title="Optional Objectives" />
			<ObjectivesContainer>
				{Object.keys(optionalObjectives).map((item: ObjectiveTypes) => {
					const selected = objectives.includes(item);
					const onClick = () => assignObjectives(item);

					return (
						<ObjectiveButton
							data-testid="objective-item"
							key={item}
							selected={selected}
							onClick={onClick}
							data-rh={optionalObjectives[item].description}
						>
							{optionalObjectives[item].name}
						</ObjectiveButton>
					);
				})}
			</ObjectivesContainer>
		</>
	);
};

export default Overview;
