import {
  COOKS_GET_BANNER_DATA,
  COOKS_GET_BOOKS_DATA,
  COOKS_GET_RECOMMEND_DATA
} from './actionTypes';

const defaultState = {
  bannerList: [],
  bannerPrefix: '',
  booksList: [],
  booksPrefix: '',
  recommendList: [],
  recommendPrefix: ''
}

const reducer = (state = defaultState, action) => {
  action = action || {type: ''}
  switch (action.type) {
    case COOKS_GET_BANNER_DATA:
      return {
        ...state,
        bannerList: action.bannerList,
        bannerPrefix: action.bannerPrefix
      }
    case COOKS_GET_BOOKS_DATA:
      return {
        ...state,
        booksList: action.list,
        booksPrefix: action.prefix
      }
    case COOKS_GET_RECOMMEND_DATA:
      return {
        ...state,
        recommendList: action.list,
        recommendPrefix: action.prefix
      }
    default:
      return state
  }
}

export default reducer;