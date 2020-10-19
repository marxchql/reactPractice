import React, { Component } from 'react';

import { CountProvider } from './Count.jsx';

import Child1 from './Child1.jsx';

class App extends Component {
  render() {
    return (
      <CountProvider>
        <Child1 />
      </CountProvider>
    );
  }
}

export default App;