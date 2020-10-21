import React, { Component } from 'react';

import store from './store';

class App extends Component {
  increment = (num) => {
    return () => {
      store.dispatch({
        type: 'increment',
        num: num
      })
    }
  }

  decrement = (num) => {
    return () => {
      store.dispatch({
        type: 'decrement',
        num: num
      })
    }
  }

  render() {
    return (
      <div>
        <button onClick={ this.decrement(5) }>-</button>
        <span>{ store.getState().count }</span>
        <button onClick={ this.increment(3) }>+</button>
      </div>
    );
  }
}

export default App;