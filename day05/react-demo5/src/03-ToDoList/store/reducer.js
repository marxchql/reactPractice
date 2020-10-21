const defaultState = {
  list: ['task1', 'task2']
}

export default (state = defaultState, action) => {
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
    default:
      return state
  }
}

