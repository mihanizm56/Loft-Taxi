import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createAppStore } from './redux/store';
import { App } from './containers';
import './styles/main.css';
import './fonts/index.css';

const ROOT_ELEMENT = document.getElementById('root');

// const store = createAppStore();

ReactDOM.render(
    <App />,
    ROOT_ELEMENT
);
