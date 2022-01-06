import styled from "styled-components";

import Out from '../../img/out';

const Btn = styled.button`
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

const Text = styled.p`
	font-size: 0.875rem;
	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	color: #ffffff;
`;

const LogOut = () => {
  return <Btn>
    <Text>Sair</Text>
    <Out />
  </Btn>
}

export default LogOut;