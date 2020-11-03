import {
  COOKS_GET_ALL
} from './actionTypes';

import {fromJS} from 'immutable'

const defaultState = fromJS({
  bannerList: [],
  bannerPrefix: '',
  booksList: [],
  booksPrefix: '',
  recommendList: [],
  recommendPrefix: ''
})

const reducer = (state = defaultState, action) => {
  action = action || {type: ''}
  switch (action.type) {
    case COOKS_GET_ALL:
      Reflect.deleteProperty(action, 'type')
      // return {
      //   ...state,
      //   ...action
      // }
      return state.mergeDeep(action)
    default:
      return state
  }
}

export default reducer;