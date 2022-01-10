import styled from 'styled-components';

import { Routes, Route } from 'react-router-dom';

import List from './pages/list';
import History from './pages/history';
import Employees from './pages/employees';
import Login from './pages/login';
import Dashboard from './pages/dashboard';


const PageWrapper = styled.div`
  border: 0;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: auto;
  overflow: hidden;
  margin-bottom: 10vh;
`;

function App() {
	return (
				<PageWrapper className="App">
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="dashboard" element={() => <Dashboard />} />
						<Route path="history" element={<History />} />
						<Route path="list" element={<List />} />
						<Route path="employees" element={<Employees />} />
					</Routes>
				</PageWrapper>
	);
}

export default App;