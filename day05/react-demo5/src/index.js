import React from 'react';
import ReactDOM from 'react-dom';

// import store from './02-react+redux/store';

// import App from './App';
// import App from './02-react+redux/App.jsx';
import App from './03-ToDoList/ToDoList.jsx';


// 需要在根组件去引入react-redux
import { Provider } from 'react-redux';

// 引入redux的store
import store from './03-ToDoList/store';

// import store from '.......';



// function render () {
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// }

// 订阅dispatch的改变
// store.subscribe(() => {
//   render();
// })

// render();
