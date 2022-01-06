import styled from "styled-components";
import ContentHeader from "../ContentHeader";


const BodyWrapper = styled.div`
  width: 100vw;
`;

const Body = styled.div`
	width: 50rem;
	height: 46.6875rem;
  margin-left: 35%;
`;


const Content = () => {
  return (
  <BodyWrapper>
			<Body>
				<ContentHeader name={'Carlos'} />
			</Body>
		</BodyWrapper>
  )
}


export default Content;