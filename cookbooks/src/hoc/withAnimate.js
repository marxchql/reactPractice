import React, {Component} from 'react';
import { CSSTransition } from 'react-transition-group';

const Animate = (Comp) => {
  return class extends Component {
    render() {
      return (
        <CSSTransition
          in={!!this.props.match}
          timeout={300}
          classNames={{
            enter: 'animate__animated',
            enterActive: 'animate__slideInRight',
            exit: 'animate__animated',
            exitActive: 'animate__slideOutRight'
          }}
          mountOnEnter
          unmountOnExit
        >
          <Comp></Comp>
        </CSSTransition>
      )
    }
  }
}

export default Animate