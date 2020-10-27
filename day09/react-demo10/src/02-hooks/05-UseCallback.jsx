import React, {useState, useCallback, memo} from 'react';


const Child = memo((props) => {
  console.log('child render')
  return (
    <>
      <h1>child</h1>
      <button onClick={props.onAdd}>child btn</button>
    </>
  )
})

// const Child2 = memo(Child);



const UseCallback = () => {
  const [count, setCount] = useState(0)

  const handleAdd = useCallback(() => {
    console.log('add')
  }, [])

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <span>{count}</span>
      <Child onAdd={handleAdd}></Child>
      <button onClick={handleClick}>+</button>
    </div>
  );
}

export default UseCallback;