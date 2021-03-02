import { Fragment } from 'react';
import tw from 'twin.macro';

import { Layout } from '@app/components';

import { spiritBox, ouijaBoard } from '@app/config/phrases';

const PhrasesContainer = tw.section`grid grid-cols-1 md:grid-cols-2 gap-4`;

const Phrases = () => (
	<Layout>
		<PhrasesContainer>
			<div tw="text-center">
				<h2>Spirit Box</h2>
				{Object.keys(spiritBox).map((key: keyof typeof spiritBox) => {
					const questions = spiritBox[key];

					return (
						<Fragment key={`spirit-box-category-${key}`}>
							<h3>{key}</h3>
							<ul>
								{questions.map((question, i) => (
									<li key={`spirit-box-question-${key}-${i}`}>
										{question}
									</li>
								))}
							</ul>
						</Fragment>
					);
				})}
			</div>
			<div tw="text-center">
				<h2>Ouiji Board</h2>
				{Object.keys(ouijaBoard).map((key: keyof typeof ouijaBoard) => {
					const questions = ouijaBoard[key];

					return (
						<Fragment key={`ouija-category-${key}`}>
							<h3>{key}</h3>
							<ul>
								{questions.map((question, i) => (
									<li key={`ouija-question-${key}-${i}`}>
										{question}
									</li>
								))}
							</ul>
						</Fragment>
					);
				})}
			</div>
		</PhrasesContainer>
	</Layout>
);

export default Phrases;
