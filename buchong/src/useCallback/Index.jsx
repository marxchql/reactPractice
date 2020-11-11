import React, { useState, useMemo, memo } from 'react';

// memo高阶组件相当于类组件加PureComponent
const Child = memo((props) => {
  console.log('child')
  return (
    <div onClick={props.onMessage}>child</div>
  )
})


const Index = () => {
  const [count, setCount] = useState(1)

  const add = () => {
    setCount(9)
  }

  // const handleClick = useCallback(() => {
  //   console.log('handleClick')
  // }, [])

  const handleClick = useMemo(() => {
    return () => {
      console.log('handleClick')
    }
  }, [])

  return (
    <div>
      <p>{count}</p>
      <button onClick={add}>btn</button>
      <Child onMessage={handleClick}></Child>
    </div>
  );
}

export default Index;