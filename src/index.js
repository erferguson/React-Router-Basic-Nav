import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"

import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

// Here we will use Router as our Base component that will wrap our entire app. We’ll do this by wrapping our <App /> component that we pass to ReactDOM.render.

const rootElement = document.getElementById('root');

ReactDOM.render(
<Router> 
    <App />
</Router>,
rootElement
);
