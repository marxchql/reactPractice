import React, { Component, createContext, useContext } from 'react';
// const { Provider, Consumer } = createContext()
const nameContext = createContext()
const nickContext = createContext()

const SunZi = () => {
  const name = useContext(nameContext)
  const nickname = useContext(nickContext)
  return (
    <div>my name is {name} , my nickname is {nickname}</div>
  )
  // return <div>my name is {name}</div>
  // return (
  //   <div>
  //     <nameContext.Consumer>
  //       {
  //         (value) => {
  //           return (<nickContext.Consumer>
  //             {
  //               (val) => {
  //               return <div>my name is {value} , my nickname is {val}</div>
  //               }
  //             }
  //           </nickContext.Consumer>)
  //         }
  //       }
  //     </nameContext.Consumer>
  //   </div>
  // )
}

const Child = () => {
  return (
    <nickContext.Provider value="xiaozhang">
      <SunZi></SunZi>
    </nickContext.Provider>
  )
}

class UseContext extends Component {
  render() {
    return (
      <nameContext.Provider value="zhangsan">
        <Child></Child>
      </nameContext.Provider>
    );
  }
}

export default UseContext;
