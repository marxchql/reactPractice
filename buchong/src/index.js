import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import App from './mobx/Index.jsx';

// 要引入Provider 和 store
import {Provider} from 'mobx-react';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
