import React from 'react';
import {createRoot} from 'react-dom/client';
// import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
// import '@components/App/App.css';

import App from './components/App/App.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
	  <App />
	</React.StrictMode>
 );