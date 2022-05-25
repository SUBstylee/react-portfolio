import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';

//DEPRICATED
// ReactDOM.render(<App />, document.querySelector('#root'));

//DO THIS IN REACT 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);