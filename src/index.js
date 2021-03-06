import React from 'react';
import ReactDOM from 'react-dom';
import './assets/sass/style.scss';
import Root from './views/Root/Root'
import * as serviceWorker from './serviceWorker';

ReactDOM.render( < Root / > , document.getElementById('root'));

// If  syou want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();