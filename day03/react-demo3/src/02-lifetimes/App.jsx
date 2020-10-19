import React, { Component } from 'react';

import Child from './Child2.jsx';

class App extends Component {
  // constructor就是Initialization阶段的生命周期钩子
  // 一定是最先执行的，只执行一次，一定会执行
  constructor(props) {
    // 初始化props和state
    super(props)

    this.state = {
      a: 3
    }

    // this.staticState = {
    //   c: 4
    // }

    // 改变方法的this指向
    // this.handleClick = this.handleClick.bind(this)
  }

  // Mounting
  // componentWillMount已经被废弃了(改名了)，在16.3之前的版本依旧是可以用的
  UNSAFE_componentWillMount() {
    // this.setState({
    //   a: 5
    // })
    // this.staticState.c = 8
    // console.log('componentWillMount')
  }

  render() {
    // 当父组件render的时候，子组件一定会render

    // console.log('render')
    // console.log(this.staticState.c)
    return (
      <div>
        <Child title={ this.state.a }/>
      </div>
    );
  }

  // 在组件被挂载结束以后执行的钩子
  componentDidMount() {
    // console.log('App mounted')
    // 在数据的请求
    setTimeout(() => {
      this.setState({
        a: 5
      })
    }, 2000)
  }


  // // updating阶段
  // componentWillReceiveProps() {
  //   // 父组件传递过来的props发生改变的时候触发
  // }

  // componentWillUnmount() {
  //   console.log('componentWillUnmount')
  // }
}

export default App;