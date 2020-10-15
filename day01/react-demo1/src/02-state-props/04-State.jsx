import React from 'react';

class App extends React.Component {
  // 申明式地定义state
  state = {
    msg: 'hello react!',
    isShow: false,
    list: [1, 2, 3]
  }

  // 使用构造函数的的方式定义state
  // constructor() {
  //   // 调用父类的构造函数
  //   super()
  //   this.state = {
  //     msg: 'hello react!'
  //   }
  // }
  render() {
    return (
      // <div>{ this.state.msg }</div>
      <div>
        {/* {
          this.state.isShow && <div>{ this.state.msg }</div>
        } */}
        <ul>
          {
            this.state.list.map(item => {
              return (
                <li key={ item }> { item } </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default App;
