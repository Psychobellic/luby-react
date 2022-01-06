import styled from "styled-components";

import Logo from "../Logo";
import LogOut from "../LogOut";
import SearchBar from "../SearchBar";

const NavWrapper = styled.nav`
	max-width: 100vw;
	max-height: 7.5rem;
	background-color: #ffffff;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding-left: 10rem;
	padding-right: 10rem;
`;


const Navbar = () => {
  return <NavWrapper>
    <Logo />
    <SearchBar />
    <LogOut />
  </NavWrapper>;
  
}


export default Navbar;