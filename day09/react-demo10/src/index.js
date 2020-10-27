import React from 'react';
import ReactDOM from 'react-dom';
// import App from './01-lazy/App.jsx';
// import App from './02-hooks/01-UseState.jsx';
// import App from './02-hooks/02-UseEffect.jsx'
import App from './02-hooks/03-UseContext.jsx';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// setTimeout(() => {
//   ReactDOM.unmountComponentAtNode(document.querySelector('#root'))
// }, 5000)