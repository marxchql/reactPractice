const defaultState = {
  bannerList: [],
  bannerPrefix: ''
}

const reducer = (state = defaultState, action) => {
  action = action || {type: ''}
  switch (action.type) {
    case 'GETBANNERLIST':
      // console.log(action.bannerList)
      // console.log(action.bannerPrefix)
      return {
        ...state,
        bannerList: action.bannerList,
        bannerPrefix: action.bannerPrefix
      }
    default:
      return state
  }
}

export default reducer;