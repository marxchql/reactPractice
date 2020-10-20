import React, { Component } from 'react';
import { dispatch } from './stroe';

// class Child extends Component {
//   render() {
//     return <div id="child"></div>
//   }
// }

class App extends Component {
  render() {
    return (
      <div>
        <button onClick={ () => {dispatch({type: 'decrement' })} }>-</button>
        <span id="count"></span>
        <button onClick={ () => {dispatch({type: 'increment' })} }>+</button>
        {/* <Child /> */}
      </div>
    );
  }

  componentDidMount() {
    dispatch()
  }
}

export default App;