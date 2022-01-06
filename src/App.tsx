import styled from 'styled-components';

import Navbar from './components/Navbar'

const PageWrapper = styled.div`
  border: 0;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
