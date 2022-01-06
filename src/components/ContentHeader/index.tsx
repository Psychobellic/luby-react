import styled from "styled-components";

const Greeting = styled.h1`
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
const ContentHeader = ({name}) => {
  return <Greeting>Bem-vindo, {name}</Greeting>;
}

export default ContentHeader;