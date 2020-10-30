import React, { Component } from 'react';

import MessagesUi from '../ui/MessagesUi';

import { connect } from 'react-redux';

import { getMessageListAsync } from '../actionCreator';

@connect(state => {
  return {
    messageList: state.messageReducer.messageList
  }
}, dispatch => {
  return {
    getList() {
      dispatch(getMessageListAsync())
    }
  }
})
class Messages extends Component {
  render() {
    return (
      <MessagesUi list={this.props.messageList}></MessagesUi>
    );
  }

  componentDidMount() {
    this.props.getList()
  }
}

export default Messages;