import axios from 'axios';

const getBannerList = data => {
  return {
    type: 'GETBANNERLIST',
    bannerList: data.result,
    bannerPrefix: data.prefix
  }
}

const getBannerListAsync = () => {
  return (dispatch) => {
    axios.get('http://10.31.160.92:5000/api/cooks/banner').then(res => {
      let {data} = res;
      if (data.status === 0) {
        dispatch(getBannerList(data))
      }
    })
  } 
}

export {
  getBannerList,
  getBannerListAsync
}