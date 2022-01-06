import styled from "styled-components";
import Cards from "../Cards";
import ContentHeader from "../ContentHeader";
import ContentSubHeader from "../ContentSubHeader";


const BodyWrapper = styled.div`
  width: 100vw;
`;

const Body = styled.div`
	width: 50vw;
	height: auto;
  margin-left: 35vw;
`;


const Content = () => {
  return (
  <BodyWrapper>
			<Body>
				<ContentHeader userName={'Carlos'} />
        <ContentSubHeader />
        <Cards />
			</Body>
		</BodyWrapper>
  )
}


export default Content;