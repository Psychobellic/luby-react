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
