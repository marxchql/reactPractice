import React, { Component } from 'react';

class Child2 extends Component {
  state = {
    b: '',
    prevB: ''
  }

  // 需要被定义成静态方法
  // 需要定义state
  // 根据props的值，去生成一个新的state
  // 有两个参数
  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log('getDerivedStateFromProps')
    // console.log(nextProps)
    // return {  // merge 会去合并之前的state
    //   b: nextProps.title
    // }
    console.log(nextProps.title)
    console.log(prevState.b)

    // 1 ->  nextProps.title 3      prevState.prevB  ''
    // 2 ->  nextProps.title 5      prevState.prevB  3
    // 3 ->  nextProps.title 5      prevState.prevB  5
    if (nextProps.title === prevState.prevB) {
      return null // 表示什么都不做修改
    } else {
      return {
        b: nextProps.title,
        prevB: nextProps.title
        // 1 -> b:3  prevB:3
        // 2 -> b:5  prevB:5
        // 3 -> 
      }
    }
  }

  render() {
    return (
      <div>child2 - { this.state.b }</div>
    );
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        b: 10
      })
    }, 4000)
  }

  // getSnapshotBeforeUpdate必须要配合componentDidUpdate()来使用
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null
  }

  componentDidUpdate() {

  }
}

export default Child2;