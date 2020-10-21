import React, { Component } from 'react';

import Input from './Input.jsx';
import List from './List.jsx';


class ToDoList extends Component {
  render() {
    return (
      <>
        <Input />
        <List />
      </>
    );
  }
}

export default ToDoList;