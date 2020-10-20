import React, { Component } from 'react';

import Modal from './Modal.jsx';

class App extends Component {
  state = {
    isShow: false
  }
  open = (e) => {
    e.stopPropagation( )
    this.setState({
      isShow: true
    })
  }
  close = () => {
    this.setState({
      isShow: false
    })
  }
  render() {
    return (
      <div onClick={this.close}>
        <button onClick={this.open}>打开对话框</button>
        <Modal show={this.state.isShow}/>
      </div>
    );
  }
}

export default App;