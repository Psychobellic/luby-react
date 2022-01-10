import styled from 'styled-components';

export const CardWrap = styled.div`
	height: auto;
	width: 50rem;
	display: flex;
	flex-direction: row;
	padding-top: 10px;
	padding-bottom: 10px;

	&:hover {
		transition: 0.2s;
		transition-timing-function: ease-in-out;
		transform: scale(105%);
	}
`;

export const TextWrap = styled.div`
	display: flex;
	flex-direction: column;
	width: 33.875rem;
`;

export const Title = styled.h3`
	height: 1rem;
	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	font-size: 1.625rem;
	letter-spacing: -0.02em;
	color: #495057;
	padding-left: 6%;
`;

export const SubTitle = styled.h4`
	height: 1rem;
	font-family: Poppins;
	font-style: normal;
	font-weight: 500;
	font-size: 1.125rem;
	color: #858585;
`;

export const Amount = styled.h5`
	height: 1rem;
	font-family: Poppins;
	font-style: normal;
	font-weight: bold;
	letter-spacing: -0.02em;
	text-transform: uppercase;
	font-size: 0.8125rem;
	color: #f54a48;
	align-self: flex-end;
`;

export const Image = styled.img`
	width: 33.875rem;
	height: 13rem;
`;


export const CardsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: auto;
`;


export const BodyWrapper = styled.div`
	width: 100vw;
`;

export const Body = styled.div`
	width: 50%;
	margin-left: 25%;
	margin-right: 25%;
`;

export const Greeting = styled.h1`
	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	font-size: 1.875rem;
	line-height: 2.8125rem;
	display: flex;
	align-items: center;
	letter-spacing: -0.02em;
	color: #495057;
`;

export const Menu = styled.h2`
	font-family: Poppins;
	font-style: normal;
	font-weight: 500;
	font-size: 1.125rem;
	line-height: 1.6875rem;
	display: flex;
	align-items: center;
	letter-spacing: -0.02em;
	color: #858585;
`;


export const LogoWrapper = styled.div`
	width: 14vw;
	height: 10vh;
	background-color: #ffffff;
	display: flex;
	text-align: center;
	justify-content: space-around;
	align-items: center;
`;

export const LogoText = styled.div`
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

export const Btn = styled.button`
	background-color: #f54a48;
	padding: 0.625rem;
	border-radius: 0.1875rem;
	height: 2.375rem;
	width: 4.836rem;
	display: flex;
	text-align: center;
	align-items: center;
	justify-content: space-between;
	border: 0;
`;

export const Text = styled.p`
	font-size: 0.875rem;
	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	color: #ffffff;
`;

export const NavWrapper = styled.nav`
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

export const SearchWrapper = styled.form`
	width: 26.875rem;
	display: flex;
	flex-direction: row;
	background: #f9f9f9;
	border: 1px solid #e6e6e6;
	box-sizing: border-box;
	align-items: center;
	justify-content: space-around;
	text-align: center;
`;

export const SearchInput = styled.input`
	width: 26.875rem;
	border-color: transparent;
	height: 2.75rem;
	text-align: center;
	box-shadow: rgba(64, 64, 64, 0.25);

	&:focus {
		outline: none;
		border-color: transparent;
	}
`;

export const Button = styled.button`
	background-color: transparent;
	border: 0;
	outline: 0;
	&:hover {
		cursor: pointer;
	}
`;