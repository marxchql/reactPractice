import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import Route from './router/index.jsx';

ReactDOM.render(
  <Provider store={store}>
    <Route></Route>
  </Provider>,
  document.getElementById('root')
);
