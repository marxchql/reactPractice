import {
  MESSAGE_GET_LIST
} from './actionTypes';

const defaultState = {
  messageList: []
}

const reducer = (state = defaultState, action) => {
  action = action || {type: ''}
  switch (action.type) {
    case MESSAGE_GET_LIST:
      return {
        ...state,
        messageList: action.list
      }
    default:
      return state
  }
}

export default reducer;