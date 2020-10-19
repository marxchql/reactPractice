import React, { Component } from 'react';

import { testContent, Provider, Consumer } from './testContext.js';


// 类组件
class ChildA extends Component {
  static contextType = testContent;

  render() {
    console.log(this)
    return (
      <div>ChildA { this.context }</div>
    );
  }
}


// 函数组件
const ChildD = () => {
  return (
    <div>
      ChildD
      {/* Consumer里面写函数 */}
      <Consumer>
        {
          value => <div>{ value }</div>
        }
      </Consumer>
    </div>
  );
}

const ChildC = () => {
  return (
    <div>
      <ChildD />
    </div>
  );
}

class ChildB extends Component {
  render() {
    return (
      <div>
        <ChildC />
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <Provider value="hello">
        <ChildA />
        <ChildB />
      </Provider>
    );
  }
}



export default App;