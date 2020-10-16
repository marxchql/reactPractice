import React, { Component } from 'react';

class App extends Component {
  // 申明式定义state
  // state = { 
  //   msg: 'hello react'
  // }

  // 构造函数定义state
  constructor(props) {
    super(props)
    this.state = {
      msg: 'hello react',
      isShow: true
    }
  }

  handleClick() {
    // 不正规的写法
    // this.state.isShow = !this.state.isShow
    // this.setState({})

    // setState 第一种写法 ， 一个参数，里面是一个对象
    // this.setState({
    //   isShow: !this.state.isShow
    // })

    // setState 第二种写法， 
    // 第一个参数是一个函数, 可以接受两个参数，前一次的状态，以及属性，需要return
    // setState 是异步操作
    // 第二个参数是一个回调函数
    this.setState((prevState, props) => {
      return {
        isShow: !prevState.isShow
      }
    }, () => {
      console.log(this.state.isShow)
    })
    // console.log(this.state.isShow)

  }

  render() {
    return (
      <>
        {
          this.state.isShow && <div>{ this.state.msg }</div>
        }
        <button onClick={ this.handleClick.bind(this) }>
          { this.state.isShow ? '隐藏' : '显示' }
        </button>
      </>
    );
  }
}

export default App;