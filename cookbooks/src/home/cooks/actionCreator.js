// import axios from 'axios';
import {
  COOKS_GET_BANNER_DATA,
  COOKS_GET_BOOKS_DATA,
  COOKS_GET_RECOMMEND_DATA
} from './actionTypes';

import {
  getBanner,
  getBooks,
  getRecommend
} from 'utils/api';

const getBannerList = data => {
  console.log(data)
  return {
    type: COOKS_GET_BANNER_DATA,
    bannerList: data.result,
    bannerPrefix: data.prefix
  }
}

const getBannerListAsync = () => {
  return async (dispatch) => {
    const res = await getBanner();
    if (res.status === 0) {
      dispatch(getBannerList(res))
    }
  } 
}


const getBooksList = data => {
  return {
    type: COOKS_GET_BOOKS_DATA,
    list: data.result,
    prefix: data.prefix
  }
}

const getBooksListAsync = () => {
  return async (dispatch) => {
    const res = await getBooks();
    if (res.status === 0) {
      dispatch(getBooksList(res))
    }
  } 
}

const getRecommendList = data => {
  return {
    type: COOKS_GET_RECOMMEND_DATA,
    list: data.result,
    prefix: data.prefix
  }
}

const getRecommendListAsync = () => {
  return async (dispatch) => {
    const res = await getRecommend();
    if (res.status === 0) {
      dispatch(getRecommendList(res))
    }
  } 
}

export {
  getBannerListAsync,
  getBooksListAsync,
  getRecommendListAsync
}