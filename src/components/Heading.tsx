import tw from 'twin.macro';

const Title = tw.h2`mb-0!`;
const Description = tw.p`opacity-80`;

type HeadingProps = {
	title: string;
	description?: string;
};

const Heading = ({ title, description }: HeadingProps) => (
	<>
		<Title>{title}</Title>
		{description && <Description>{description}</Description>}
	</>
);

export default Heading;
