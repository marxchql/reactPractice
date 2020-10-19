import React, { Component } from 'react';

class Child extends Component {
  state = {
    c: 10
  }

  componentDidMount() {
    // console.log('child mounted')
    setTimeout(() => {
      this.setState({
        c: 20
      })
    }, 1000)
  }


  // updating阶段
  UNSAFE_componentWillReceiveProps(nextProps) {
    // 父组件传递过来的props发生改变的时候触发
    console.log('componentWillReceiveProps')
    // 很像props的监听，被废弃了，有更好的钩子来代替它
    // vue里面只有发生改变的触发，在react里面无脑触发
    console.log(this.props)
    console.log(nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    // return false // true 表示放行，render就会执行多次，在这里判断是否需要去执行多次
    // if (this.props.title === nextProps.title) {
    //   return false
    // } else {
    //   return true
    // }
    // return !(this.props.title === nextProps.title)
    return !(this.state.c === nextState.c)

    // PureComponent 
  }

  UNSAFE_componentWillUpdate() {
    // 被废弃了
    console.log('UNSAFE_componentWillUpdate')
  }

  render() {
    console.log('child render')
    return (
    <div>child{ this.props.title }{ this.state.c }</div>
    );
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
    this.setState({
      c: 9
    })
  }
}

export default Child;