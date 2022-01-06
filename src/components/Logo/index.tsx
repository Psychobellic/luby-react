import styled from 'styled-components';
import LogoSVG from '../../img/logo';

const LogoWrapper = styled.div`
	width: 14vw;
	height: 10vh;
	background-color: #ffffff;
	display: flex;
	text-align: center;
	justify-content: space-around;
	align-items: center;
`;

const LogoText = styled.div`
	padding-left: 1.425rem;
	width: 11rem;
	display: flex;
	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	font-size: 2.375rem;
	letter-spacing: -0.07rem;
	line-height: 4.875rem;
	align-items: center;
	color: #f54a48;
`;



const Logo = () => {
	return <LogoWrapper>
    <LogoSVG />
		<LogoText>AutoLuby</LogoText>
  </LogoWrapper>;
};

export default Logo;
