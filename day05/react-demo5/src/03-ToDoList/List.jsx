import React, { Component } from 'react';

// 需要引入react-redux里面的connect
import { connect } from 'react-redux';

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
  return {}
}


class List extends Component {
  render() {
    // console.log(this)
    return (
      <ul>
        {
          this.props.list.map((item, index) => {
            return <li key={index}>{ item }</li>
          })
        }
      </ul>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
// export default List;