import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './App';
import Store from './redux/store/Store';
import { Provider } from 'react-redux';

ReactDOM.render(
	<Provider store={Store()}>
		<App />
	</Provider>,
	document.getElementById('root'),
);
