import React, {Component} from 'react';
// 引入store的数据
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Index extends Component {
  
  render() {
    console.log(this.props)
    const count1 = this.props.store.count
    const {count, doubleCount, increment} = this.props.store.count
    return (
      <div>
        <p>{count}</p>
        <p>{doubleCount}</p>
        <button onClick={increment.bind(count1)}>+</button>
      </div>
    );
  }
}

export default Index;