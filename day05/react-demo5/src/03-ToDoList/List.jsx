import React, { Component } from 'react';

// 需要引入react-redux里面的connect
import { connect } from 'react-redux';

import { RemoveDataAction, GetDataAction } from './store/actionCreator';

// connext执行出来的结果是一个高阶组件
// connect(fn1, fn2)

// 映射store里面的state到当前组件的props
const mapStateToProps = state => {
  return {
    list: state.list
  }
}

// 映射store里面的dispatch到当前组件的props
const mapDispatchToProps = dispatch => {
  return {
    // 删除某一项
    remove(index) {
      dispatch(RemoveDataAction(index))
    },

    // 获取数据的方法
    getList() {
      dispatch(GetDataAction())
    }
  }
}


class List extends Component {
  removeItem = (index) => {
    return () => {
      this.props.remove(index)
    }
  }

  render() {
    // console.log(this)
    return (
      <ul>
        {
          this.props.list.map((item, index) => {
            return (<li key={index}>
              { item }
              <button onClick={this.removeItem(index)}>btn</button>
            </li>)
          })
        }
      </ul>
    );
  }

  componentDidMount() {
    // 这里做数据请求
    // this.props.getList()
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
// export default List;