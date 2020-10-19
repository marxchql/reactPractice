import React from 'react';
import ReactDOM from 'react-dom';

import App from './02-lifetimes/App.jsx';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// setTimeout(() => {
//   ReactDOM.unmountComponentAtNode(document.querySelector('#root'));
// }, 5000)
