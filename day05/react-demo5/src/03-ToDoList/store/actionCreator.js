const PushDataAction = task => {
  return {
    type: 'PUSH_DATA',
    task: task
  }
}

const RemoveDataAction = index => {
  return {
    type: 'REMOVE_DATA',
    index: index
  }
}

const GetDataAction2 = data => {
  return {
    type: 'GET_DATA',
    data
  }
}

const GetDataAction = data => {
  // return {
  //   type: 'GET_DATA',
  //   data
  // }
  return dispatch => {
    // 如果是函数，可以去做异步操作
    // ['task3', 'task4']
    // 用定时器去模拟数据请求
    setTimeout(() => {
      // 里面的dispatch放到请求成功的回调函数里面，并且将得到的数据传递
      let data = ['task3', 'task4']
      dispatch(GetDataAction2(data)) 
    }, 1000)
    
  }
}

export {
  PushDataAction,
  RemoveDataAction,
  GetDataAction,
  GetDataAction2
}