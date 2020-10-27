import React, { Component, lazy, Suspense } from 'react';

// import Child from './Child';

const Child = lazy(() => import('./Child.jsx'));

class App extends Component {
  state = {
    show: false
  }
  handleClick = () => {
    this.setState({
      show: true
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>btn</button>
        <Suspense fallback={<div>loading...</div>}>
          {
            this.state.show && <Child></Child>
          }
        </Suspense>
      </div>
    );
  }
}

export default App;