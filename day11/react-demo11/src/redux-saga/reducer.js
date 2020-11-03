const defaultState = {
  count: 0
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'add':
      return {
        count: action.count
      }
    default:
      return state
  }
}

export default reducer;