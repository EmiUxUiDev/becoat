import React from 'react';
import ReactDOM from 'react-dom/client';
import Modal from 'react-modal'
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
Modal.setAppElement(root.container); 
root.render(
    <App />
);


