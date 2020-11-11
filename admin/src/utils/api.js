import http from './http';
import obj from '../assets/js/admin';

// 天气接口
export const getWea = (params) => http.get(`https://v0.yiketianqi.com/api?version=v61&appid=${obj.appId}&appsecret=${obj.appsecret}`, params)

// 照片墙
export const getPicList = (params) => http.get('/pics/list', params)


// 表格
export const getTableList = (params) => http.get('/tables/basic/list', params)

// 表格删除
export const deleteTableList = (params) => http.post('/tables/basic/delete', params)


export const getHighList = (params) => http.get('/hightables/list', params)

// 城市管理
export const getCitiesList = (params) => http.post('/cities/manage/list', params)

// 城市列表
export const getCities = (params) => http.get('/cities/list', params)

// 添加接口
export const addCities = (params) => http.post('/cities/manage/add', params)

// 订单接口
export const ordersList = (params) => http.post('/orders/list', params)

// 登录
export const userLogin = (params) => http.post('/users/login', params)

// 权限列表
export const userList = (params) => http.get('/users/list', params)

