import React from 'react';
// import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import App from './components/app/app';
import 'bootstrap/dist/css/bootstrap.css';
import './components/app/app.css';

const root = createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
	  <App />
	</React.StrictMode>
 );