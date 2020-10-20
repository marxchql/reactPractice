import React, { Component } from 'react';
import store from './store';

// class Child extends Component {
//   render() {
//     return <div id="child"></div>
//   }
// }

class App extends Component {
  render() {
    return (
      <div>
        <button onClick={ () => {store.dispatch({type: 'decrement' })} }>-</button>
        <span id="count"></span>
        <button onClick={ () => {store.dispatch({type: 'increment' })} }>+</button>
        {/* <Child /> */}
      </div>
    );
  }

  componentDidMount() {
    store.dispatch()
  }
}

export default App;