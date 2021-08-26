import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux';
import Router from './routes';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store = { store }>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);