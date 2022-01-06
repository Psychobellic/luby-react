import styled from "styled-components";

const CardWrap = styled.div`
	height: 12.5rem;
  width: 50rem;
`;

const Title = styled.h3`
	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	font-size: 1.625rem;
	line-height: 2.4375rem;
	letter-spacing: -0.02em;
`;


export interface Props {
	title: string
	subTitle: string
	amount: string
	image: Object
}
const Card = ({ title, subTitle, amount, image }: Props) => {
  return (
		<CardWrap>
			<Title>{title}</Title>
		</CardWrap>
	);
}

export default Card