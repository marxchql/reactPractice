import React, { Component } from 'react';

import { CountConsumer } from './Count.jsx';

class Child2 extends Component {
  render() {
    return (
      <div>
        <CountConsumer>
          {
            ({count, increment}) => (
              <>
                <span>{ count }</span>
                <button onClick={ () => increment(5) }>+</button>
              </>
            )
          }
        </CountConsumer>
      </div>
    );
  }
}

export default Child2;