// Brower App  -> ReactDOM
// Native App  -> ReactNative
import React from 'react';
import ReactDOM from 'react-dom';

// import App from './01-getting-start/01-nest';
// import App from './01-getting-start/02-class-style';
// import App from './02-state-props/01-DataMount.jsx';
import App from './02-state-props/04-State.jsx';

// 函数式组件
// let App = (props) => {
//   console.log(props);
//   return <div>hello react { props.name }</div>;
// }

// 类组件
// 语法糖，在浏览器运行的时候，还是会翻译成es5的function
// class App extends React.Component {
//   render() {
//     return (
//       <div>hello react { this.props.name }</div>
//     )
//   }
// }


// ReactDOM.render函数用于构建用户页面
// 里面有两个参数，第一个是元素，第二个是挂载的节点

// react 组件   大写开头
// react 元素   小写开头
ReactDOM.render(
  // App({
  //   name: '!!!'
  // }),  // jsx语法
  <App/>,  // 实例化这个类
  document.querySelector('#root')
)