const initState = {
  count: 0
}

const reducer = (state, action) => {
  action = action || {type: ''}
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}

export {
  initState,
  reducer
}