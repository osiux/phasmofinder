import { useState } from 'react';
import Link from 'next/link';
import tw from 'twin.macro';
import { GiGhost } from 'react-icons/gi';
import { FaTimes, FaBars } from 'react-icons/fa';

const Nav = tw.nav`flex items-center bg-gray-900 text-gray-100 p-3 flex-wrap border-b border-black h-auto w-full z-10`;
const BrandLink = tw.a`text-xl text-gray-100 font-bold flex items-center`;
const Ghost = tw(GiGhost)`mr-2`;
const LinksContainer = tw.div`w-full items-start flex flex-col md:inline-flex md:flex-row md:ml-auto md:w-auto md:items-center md:h-auto`;
const ToggleMenuButton = tw.button`inline-flex p-3 rounded md:hidden ml-auto outline-none transition-colors focus:outline-none`;

const Navigation = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const _toggleMenu = () => setMenuOpen((prev) => !prev);

	return (
		<Nav>
			<Link href="/" passHref>
				<BrandLink>
					<Ghost /> PhasmoFinder
				</BrandLink>
			</Link>
			<ToggleMenuButton
				role="button"
				aria-label="Toggle Menu"
				onClick={_toggleMenu}
			>
				{menuOpen ? <FaTimes /> : <FaBars />}
			</ToggleMenuButton>
		</Nav>
	);
};

export default Navigation;
