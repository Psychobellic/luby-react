import styled from 'styled-components';


export const VehiclesWrapper = styled.div`
`;

export const BodyVehicles = styled.div`
	width: 90%;
  margin-left: 2.5%;
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

export const Title = styled.h1`
	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	font-size: 0.75rem;
	color: #a2a2a2;
	align-items: center;
	line-height: 120%;
`;

export const Paragraph = styled.p`
	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	font-size: 0.9rem;
	color: #a2a2a2;
	line-height: 120%;
	padding: 10px;
	height: auto;
	margin-left: 5%;
`;

export const Table = styled.table`
	display: flex;
	flex-direction: column;
	min-width: 100%;
`;

export const TableRow = styled.tr`
	display: flex;
	flex-direction: row;
	min-width: 100%;
`;

export const TableHeader = styled.th`
	display: flex;
	flex-direction: row;
	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	font-size: 0.8rem;
	color: #a2a2a2;
	line-height: 120%;
	padding: 10px;
	height: auto;
	min-width: 30%;
	max-width: 30%;
`;

export const TableData = styled.td`
	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	font-size: 0.75rem;
	color: #a2a2a2;
	line-height: 120%;
	padding: 10px;
	height: auto;
	min-width: 11.5%;
	max-width: 11.5%;
`;

export const BodyEmployees = styled.div`
	width: 90%;
`;

export const Headers = styled.div`
	display: flex;
	flex-direction: row;
`;

export const ListHeader = styled.div`
	display: flex;
	flex-direction: row;
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

