import React, { useState, useEffect } from 'react';

const UseEffect = () => {
  let [data, setData] = useState({
    count: 0,
    name: 'zhangsan'
  })

  function handleClick() {
    setData(prevData => {
      return {
        ...prevData,
        count: prevData.count + 1
      }
    })
  }

  function getData() {
    return fetch('https://www.fastmock.site/mock/0d881ee16ab4856889a471ab2db5d205/api/home/list')
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        return data
      })
  }

  // useEffect有两个参数,第一个参数是一个函数
  // useEffect类似于componentDidMount,还类似于componentDidUpdate
  // 第二个参数是一个数组，是依赖，只有依赖的数据发生了改变，那么才会再次执行前面的回调函数
  // 类似于shouldComponenUpdate
  // 可以写多个
  // 类似于componentWillUnmount
  // useEffect(() => {
  //   console.log('useEffect')
  // }, [data.count])

  useEffect(() => {
    // console.log('useEffect')
    // fetch('https://www.fastmock.site/mock/0d881ee16ab4856889a471ab2db5d205/api/home/list')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data)
    //   })
    // const res = await getData()
    // console.log(res)
    (async() => {
      const res = await getData()
      console.log(res)
    })()
    return () => {
      console.log('unmount')
    }
  }, [])

  return (
    <div>
      <span>{data.count}</span>
      <button onClick={handleClick}>btn</button>
    </div>
  )
};

export default UseEffect;