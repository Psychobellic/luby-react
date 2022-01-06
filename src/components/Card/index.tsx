import styled from "styled-components";

const CardWrap = styled.div`
	height: 12.5rem;
  width: 50rem;
	min-width: 50rem;
  display: flex;
  flex-direction: row;
	padding-top: 20px;
`;

const TextWrap = styled.div`
	display: flex;
	flex-direction: column;
	width: 33.875rem;
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

const Image = styled.img`
	width: 33.875rem;
  height: 100%;
`;


export interface Props {
	title: string
	subTitle: string
	amount: string
	image: string
}
const Card = (props: Props) => {
  return (
		<CardWrap>
			<TextWrap>
				<Title>{props.title}</Title>
				<SubTitle>{props.subTitle}</SubTitle>
				<Amount>{props.amount}</Amount>
			</TextWrap>
			<Image src={props.image}/>
		</CardWrap>
	);
}

export default Card