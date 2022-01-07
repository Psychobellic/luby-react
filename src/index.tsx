import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import userStore from './reducers/userStore';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={userStore}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);