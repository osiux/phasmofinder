import tw from 'twin.macro';
import { FaGithub } from 'react-icons/fa';

const Footer = tw.footer`mt-5 flex justify-between`;

const FooterComponent = () => (
	<Footer>
		<p>
			Made by{' '}
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.osiux.ws/"
			>
				Eduardo Reveles
			</a>
			.
		</p>
		<p>
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://github.com/osiux/phasmofinder"
			>
				<FaGithub tw="inline-block" /> Github
			</a>
		</p>
	</Footer>
);

export default FooterComponent;
