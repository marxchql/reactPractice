import React from 'react';
import ReactDOM from 'react-dom';

import store from './02-react+redux/store';

// import App from './App';
import App from './02-react+redux/App.jsx';

function render () {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

// 订阅dispatch的改变
store.subscribe(() => {
  render();
})

render();
