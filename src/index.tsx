import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Vehicles from './pages/vehicles';
import Employees from './pages/employees';
import Sold from './pages/sold';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/login" element={<Login />} />
				<Route path="/dashboard" element={< Dashboard />} />
				<Route path="/sold" element={<Sold />} />
				<Route path="/vehicles" element={<Vehicles />} />
				<Route path="/employees" element={<Employees />} />
			</Routes>
		</Router>
	</Provider>,
	document.getElementById('root')
);