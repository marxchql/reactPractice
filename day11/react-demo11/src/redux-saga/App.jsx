import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <div>{ this.props.count }</div>
        <button onClick={this.props.getAll}>btn</button>
      </div>
    );
  }
}

// export default App;
export default connect(state => ({count: state.count}), dispatch => ({
  getAll() {
    dispatch({
      type: 'countAdd'
    })
  }
}))(App)
