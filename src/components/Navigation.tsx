import { useState } from 'react';
import Link from 'next/link';
import tw from 'twin.macro';
import { GiGhost } from 'react-icons/gi';
import { FaTimes, FaBars } from 'react-icons/fa';

const Nav = tw.nav`flex items-center bg-gray-900 text-gray-100 p-3 flex-wrap border-b border-black h-auto w-full z-10`;
const BrandLink = tw.a`text-xl text-gray-100 font-bold flex items-center`;
const GhostImg = tw.img`mr-2`;
// const ToggleMenuButton = tw.button`inline-flex p-3 rounded md:hidden ml-auto outline-none transition-colors focus:outline-none`;

const Navigation = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const _toggleMenu = () => setMenuOpen((prev) => !prev);

	return (
		<Nav>
			<Link href="/" passHref>
				<BrandLink>
					<GhostImg src="/ghost.svg" alt="PhasmoFinder" width="20" />{' '}
					PhasmoFinder
				</BrandLink>
			</Link>
			{/* <ToggleMenuButton
				role="button"
				aria-label="Toggle Menu"
				onClick={_toggleMenu}
			>
				{menuOpen ? <FaTimes /> : <FaBars />}
			</ToggleMenuButton> */}
		</Nav>
	);
};

export default Navigation;
