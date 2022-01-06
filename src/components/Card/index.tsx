import styled from "styled-components";

const CardWrap = styled.div`
	height: 12.5rem;
  width: 50rem;
  display: flex;
  flex-direction: row;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: columns;
`;

const Title = styled.h3`
	height: 2.4375rem;
	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	font-size: 1.625rem;
	line-height: 2.4375rem;
	letter-spacing: -0.02em;
	color: #495057;
`;

const SubTitle = styled.h4`
	font-family: Poppins;
	font-style: normal;
	font-weight: 500;
  line-height: 1.6875rem;
  font-size: 1.125rem;
	color: #858585;
`;

const Amount = styled.h5`
	font-family: Poppins;
	font-style: normal;
	font-weight: bold;
	letter-spacing: -0.02em;
	text-transform: uppercase;
	font-size: 0.8125rem;
	line-height: 1.1875rem;
	color: #f54a48;
`;

const Image = styled.div`
	width: 33.875rem;
  height: 100%;
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
			<TextWrap>
				<Title>{title}</Title>
				<SubTitle>{subTitle}</SubTitle>
				<Amount>{amount}</Amount>
			</TextWrap>
			<Image>{image}</Image>
		</CardWrap>
	);
}

export default Card