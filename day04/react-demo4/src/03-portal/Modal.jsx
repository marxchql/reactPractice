import React, { Component } from 'react';

import withPortal from './withPortal.js';

import './style.css';

class Modal extends Component {
  render() {
    return (
      <>
        {
          this.props.show ? (
            <div className="modal">
              <div className="wrap">
                <h1>Portal Header</h1>
                <button>btn</button>
              </div>
            </div>
          ) : null
        }
      </>
      
    );
  }
}

export default withPortal(Modal);