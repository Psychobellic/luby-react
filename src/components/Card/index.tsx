import { CardWrap, TextWrap, Title, SubTitle, Amount, Image } from "./styles";

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