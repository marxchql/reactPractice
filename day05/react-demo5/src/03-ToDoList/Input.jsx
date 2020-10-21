import React, { Component } from 'react';

import { connect } from 'react-redux';

// 映射store里面的dispatch到当前组件的props
const mapDispatchToProps = dispatch => {
  return {
    pushData(task) {
      dispatch({
        type: 'PUSH_DATA',
        task: task
      })
    }
  }
}

class Input extends Component {
  state = {
    textValue: ''
  }

  handleChange = (e) => {
    this.setState({
      textValue: e.target.value
    })
  }

  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      // 触发dispatch
      this.props.pushData(this.state.textValue)
      this.setState({
        textValue: ''
      })
    }
  }

  render() {
    return (
      <div>
        <input 
          type="text" 
          value={this.state.textValue}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
        />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Input);