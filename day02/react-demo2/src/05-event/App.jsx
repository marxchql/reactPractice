import React, { Component } from 'react';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   // 写在constructor里面，只会生成一次函数，性能会好一些
  //   this.handleClick = this.handleClick.bind(this);
  // }


  state = {
    count: 1
  }

  // handleClick(num) {
  //   // console.log(123)
  //   // console.log(this.state.count);
  //   console.log(num)
  // }

  // 函数柯里化
  handleClick = () => {
    return () => {
      console.log(this.state.count)
    }
  }

  // handleClick = (e) => {
  //   console.log(e)
  // }

  render() {
    return (
      // 不推荐直接bind
      <div onClick={ this.handleClick.bind(this) }>hello</div>

      // <div onClick={ this.handleClick() }>hello</div>

      // <div onClick={this.handleClick}>hello</div>
    );
  }
}

export default App;


// 改变this指向
// 直接在render里面的行内写 this.xxx.bind(this)
// 在constructor的函数里面 this.xxx = this.xxx.bind(this);
// 定义的时候写成箭头函数  xxx = () => {}

// 传参
// 直接在render里面的行内写 () => this.handleClick(8)
// 直接在render里面的行内写 this.xxx.bind(this, argument)
// 用柯里化 handleClick = () => {
  //   return () => {
  //     console.log(this.state.count)
  //   }
  // }



