import { useState } from 'react';
import Link from 'next/link';
import tw, { styled } from 'twin.macro';
import { FaTimes, FaBars } from 'react-icons/fa';

const Nav = tw.nav`flex items-center bg-gray-900 text-gray-100 p-3 flex-wrap border-b border-black h-auto w-full z-10`;
const BrandLink = tw.a`text-xl text-gray-100 font-bold flex items-center`;
const GhostImg = tw.img`mr-2`;
const ToggleMenuButton = tw.button`inline-flex p-3 rounded md:hidden ml-auto outline-none transition-colors focus:outline-none`;
const NavList = styled.div(({ open }: { open: boolean}) => [
    tw`hidden w-full md:inline-flex md:flex-grow md:w-auto`,
    open && tw`block`,
    `.current {
        text-decoration: underline;
    }`,
]);
const LinksContainer = tw.div`w-full items-start flex flex-col md:inline-flex md:flex-row md:ml-auto md:w-auto md:items-center md:h-auto`;
const NavLink = tw.a`w-full px-3 py-2 text-gray-100 items-center justify-center hover:underline md:inline-flex md:w-auto`;

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
			<ToggleMenuButton
				role="button"
				aria-label="Toggle Menu"
				onClick={_toggleMenu}
			>
				{menuOpen ? <FaTimes /> : <FaBars />}
			</ToggleMenuButton>
			<NavList open={menuOpen}>
                <LinksContainer>
                    <Link href="/phrases" passHref>
                        <NavLink>Phrases</NavLink>
                    </Link>
					<Link href="/maps" passHref>
						<NavLink>Maps</NavLink>
					</Link>
                </LinksContainer>
            </NavList>
		</Nav>
	);
};

export default Navigation;
