import http from './http';

// 轮播图数据
export const getBanner = (params) => http.get('/cooks/banner', params)

// 菜单信息
export const getBooks = (params) => http.get('/cooks/menu', params)

// 推荐
export const getRecommend = (params) => http.get('/cooks/recommend', params)

// 动态列表
export const getMessagesList = (params) => http.get('/messages/list', params)

