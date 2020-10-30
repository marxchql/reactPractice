import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import './style.css';
import 'animate.css';

class Mine extends Component {
  state = {
    show: true
  }
  change = () => {
    this.setState(prevState => {
      return {
        show: !prevState.show
      }
    })
  }
  render() {
    return (
      <>
        <CSSTransition
          in={this.state.show}
          timeout={500}
          classNames={{
            enter: 'animate__animated',
            enterActive: 'animate__bounce',
            exit: 'animate__animated',
            exitActive: 'animate__heartBeat'
          }}
          mountOnEnter
          unmountOnExit
        >
          <div style={{fontSize: '50px'}}>mine</div>
        </CSSTransition>

        <button onClick={this.change}>btn</button>
      </>
    );
  }
}

export default Mine;