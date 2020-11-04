import http from './http';
import obj from '../assets/js/admin';

// 天气接口
export const getWea = (params) => http.get(`https://v0.yiketianqi.com/api?version=v61&appid=${obj.appId}&appsecret=${obj.appsecret}`, params)

