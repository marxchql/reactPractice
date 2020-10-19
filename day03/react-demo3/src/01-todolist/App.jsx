import React, { Component, Fragment } from 'react';

import Input from './Input.jsx';
import List from './List.jsx';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list: [
        {
          id: 1,
          title: 'shanqiang'
        },
        {
          id: 2,
          title: 'hangtian'
        }
      ]
    }
  }

  handleMessage = () => {
    return (data) => {
      // console.log(data)
      // 改变一下原来的数组
      // let newList = this.state.list
      // newList.push({
      //   id: new Date().getTime(),
      //   title: data
      // })
      // this.setState({
      //   // list: newList
      //   list: this.state.list.concat({
      //     id: new Date().getTime(),
      //     title: data
      //   })
      // })

      // this.setState((prevState) => {
      //   return {
      //     list: prevState.list.concat({
      //       id: new Date().getTime(),
      //       title: data
      //     })
      //   }
      // })

      // this.state.list.push({
      //   id: new Date().getTime(),
      //   title: data
      // })
      // this.setState({})

      this.setState((prevState) => {
        let obj = {
          id: new Date().getTime(),
          title: data
        }
        return {
          list: [...prevState.list, obj]
        }
      })
    }
  }

  handleDelete = (id) => {
    return () => {
      let newList = this.state.list.filter(item => id !== item.id)
      this.setState({
        list: newList
      })
    }
  }

  render() {
    return (
      <Fragment>
        <Input onMessage={ this.handleMessage() } />
        <List list={ this.state.list } onDeleteItem={ this.handleDelete } />
      </Fragment>
    );
  }
}

export default App;