import React, { Component } from 'react';

// import { CountConsumer } from './Count.jsx';
import Child2 from './Child2.jsx';

class Child1 extends Component {
  render() {
    return (
      <div>
        <Child2 />
      </div>
    );
  }
}

export default Child1;