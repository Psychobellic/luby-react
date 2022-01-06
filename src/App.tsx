import styled from 'styled-components';

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Dashboard from './pages/dashboard';
import List from './pages/List';
import History from './pages/history';
import Employees from './pages/employees';


const PageWrapper = styled.div`
  border: 0;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: auto;
  overflow: hidden;
  margin-bottom: 10vh;
`;

const LoginWrapper = styled.div`
  display: grid;
  grid-columns: 2, 1fr;
`;

const LoginForm = styled.div`
	width: 100%;
	height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;



function Login(){
  return (
		<>
			<Navbar />
      <LoginWrapper>
        <LoginForm>

        </LoginForm>
        <Image src='subaru.svg'/>
      </LoginWrapper>
		</>
	);
}

function App() {
	return (
		<PageWrapper className="App">
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/history" element={<History />} />
				<Route path="/list" element={<List />} />
				<Route path="/employees" element={<Employees />} />
			</Routes>
		</PageWrapper>
	);
}

export default App;