import tw from 'twin.macro';
import { FaGithub } from 'react-icons/fa';

const Footer = tw.footer`mt-5 flex justify-between`;

const FooterComponent = () => (
	<Footer>
		<p>
			Made by <a href="https://www.osiux.ws/">Eduardo Reveles</a>.
		</p>
		<p>
			<a href="https://github.com/osiux/phasmofinder">
				<FaGithub tw="inline-block" />
			</a>
		</p>
	</Footer>
);

export default FooterComponent;
