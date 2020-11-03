import {
  MESSAGE_GET_LIST
} from './actionTypes';

import {Map} from 'immutable';

const defaultState = Map({
  messageList: []
})

const reducer = (state = defaultState, action) => {
  action = action || {type: ''}
  switch (action.type) {
    case MESSAGE_GET_LIST:
      return state.set('messageList', action.list)
    default:
      return state
  }
}

export default reducer;