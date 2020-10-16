import React, { Component } from 'react';

import Child1 from './Child1.jsx';
import Child2 from './Child2.jsx';

class App extends Component {
  state = {
    data: ''
  }

  handlerArrive(data) {
    // 接受子组件传来的状态
    // console.log(data)
    this.setState({
      data: data
    })
  }

  render() {
    return (
      <>
        <div>hello</div>
        <Child1 onHandlerArrive={ this.handlerArrive.bind(this) }></Child1>
        <Child2 data={ this.state.data }></Child2>
      </>
    );
  }
}

export default App;