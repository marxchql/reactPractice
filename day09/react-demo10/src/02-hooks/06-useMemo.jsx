import React, {useState, useMemo, memo} from 'react';

const Hook = (props) => {
  console.log(props)
  return (
    <div>child hook</div>
  )
}

const Child = memo(({a, b, onAdd}) => {

  const Child1 = useMemo(() => () => <Hook a={a}></Hook>, [a])
  const Child2 = useMemo(() => () => <Hook b={b}></Hook>, [b])


  return (
    <>
      <h1>child</h1>
      <button onClick={onAdd}>child btn</button>
      <Child1></Child1>
      <Child2></Child2>
    </>
  )
})



const UseCallback = () => {
  const [data, setData] = useState({
    count: 0,
    a: 'abc',
    b: 'def'
  })

  // const handleAdd = useCallback(() => {
  //   console.log('add')
  // }, [])

  const handleAdd = useMemo(() => {
    return () => {
      console.log('add')
    }
  }, [])

  const handleClick = () => {
    setData({
      ...data,
      // count: data.count + 1
      a: data.a + 's'
    })
  }

  return (
    <div>
      <span>{data.count}</span>
      <Child onAdd={handleAdd} a={data.a} b={data.b}></Child>
      <button onClick={handleClick}>+</button>
    </div>
  );
}

export default UseCallback;