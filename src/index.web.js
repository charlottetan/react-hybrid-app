import React from 'react';
import ReactDom from 'react-dom';

import App from './App';
import './assets/index.css';

ReactDom.render(<App />, document.getElementById('app'));

module.hot.accept();
