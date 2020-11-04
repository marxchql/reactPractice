// import { CHANGE_PAGE_TITLE } from './actionTypes';

const defaultState = {
  pageTitle: '首页'
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'changeTitle2':
      return {
        pageTitle: action.title
      }
    default:
      return state
  }
}

export default reducer;