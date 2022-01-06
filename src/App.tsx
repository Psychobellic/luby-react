import styled from 'styled-components';

import Navbar from './components/Navbar';
import Content from './components/Content';

const PageWrapper = styled.div`
  border: 0;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin-bottom: 10vh;
`;

function App() {
  return (
		<PageWrapper className="App">
			<Navbar />
			<Content />
		</PageWrapper>
	);
}

export default App;
