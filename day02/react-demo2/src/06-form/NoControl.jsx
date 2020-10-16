import React, { Component, createRef } from 'react';

class NoControl extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.inp = createRef()
  }

  handleClick() {
    console.log(this.inp.current.value)
  }

  render() {
    return (
      <>
        {/* 非受控组件通过 defaultValue的方式添加默认值 */}
        <input type="text" ref={this.inp} defaultValue="hello"/>
        <button onClick={this.handleClick}>btn</button>
      </>
      
    );
  }
}

export default NoControl;