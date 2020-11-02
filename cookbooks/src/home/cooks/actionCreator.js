// import axios from 'axios';
import {
  // COOKS_GET_BANNER_DATA,
  // COOKS_GET_BOOKS_DATA,
  // COOKS_GET_RECOMMEND_DATA
  COOKS_GET_ALL
} from './actionTypes';

import {
  getBanner,
  getBooks,
  getRecommend
} from 'utils/api';


const getCooksall = data => {
  return {
    type: COOKS_GET_ALL,
    ...data
  }
}

const getCooksallAsync = () => {
  return async (dispatch) => {
    // 做数据请求
    const res = await Promise.all([getBanner(), getBooks(), getRecommend()])
    dispatch(getCooksall({
      bannerList: res[0].result,
      bannerPrefix: res[0].prefix,
      booksList: res[1].result,
      booksPrefix: res[1].prefix,
      recommendList: res[2].result,
      recommendPrefix: res[2].prefix
    }))
  }
}

// const getBannerList = data => {
//   return {
//     type: COOKS_GET_BANNER_DATA,
//     bannerList: data.result,
//     bannerPrefix: data.prefix
//   }
// }

// const getBannerListAsync = () => {
//   return async (dispatch) => {
//     const res = await getBanner();
//     if (res.status === 0) {
//       dispatch(getBannerList(res))
//     }
//   } 
// }


// const getBooksList = data => {
//   return {
//     type: COOKS_GET_BOOKS_DATA,
//     list: data.result,
//     prefix: data.prefix
//   }
// }

// const getBooksListAsync = () => {
//   return async (dispatch) => {
//     const res = await getBooks();
//     if (res.status === 0) {
//       dispatch(getBooksList(res))
//     }
//   } 
// }

// const getRecommendList = data => {
//   return {
//     type: COOKS_GET_RECOMMEND_DATA,
//     list: data.result,
//     prefix: data.prefix
//   }
// }

// const getRecommendListAsync = () => {
//   return async (dispatch) => {
//     const res = await getRecommend();
//     if (res.status === 0) {
//       dispatch(getRecommendList(res))
//     }
//   } 
// }

export {
  // getBannerListAsync,
  // getBooksListAsync,
  // getRecommendListAsync
  getCooksallAsync
}