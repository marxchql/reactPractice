const defaultState = {
  list: []
}

export default (state = defaultState, action) => {
  console.log('action:', action)
  action = action || {type: ''}
  switch (action.type) {
    case 'PUSH_DATA':
      return {
        ...state,
        list: [
          ...state.list,
          action.task
        ]
      }
    case 'REMOVE_DATA':
      // console.log(action.index)
      let newList = state.list.filter((item, index) => {
        return index !== action.index
      })
      return {
        ...state,
        list: newList
      }
    case 'GET_DATA':
      // console.log('数据获取成功' + action.data)
      return {
        ...state,
        list: action.data
      }
    default:
      return state
  }
}

