// import React, { Component } from 'react';

// class UseState extends Component {
//   state = {
//     count: 0
//   }

//   handleClick = () => {
//     this.setState(prevState => {
//       return {
//         count: prevState.count + 1
//       }
//     })
//   }

//   render() {
//     return (
//       <div>
//         <span>{this.state.count}</span>
//         <button onClick={this.handleClick}>btn</button>
//       </div>
//     );
//   }
// }

import React, { useState } from 'react';

const UseState = () => {
  // let [count, setCount] = useState(0)
  let [data, setData] = useState({
    count: 0,
    name: 'zhangsan'
  })

  function handleClick() {
    // setCount(5)
    // setCount(count + 1)
    setData((prevData) => {
      // return prevData + 1
      return {
        ...prevData,
        count: prevData.count + 1
      }
    })
  }

  return (
    <div>
      <span>{data.name}</span>
      <span>{data.count}</span>
      <button onClick={handleClick}>btn</button>
    </div>
  )
}

export default UseState;