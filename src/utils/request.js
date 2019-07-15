import axios from 'axios'
import store from '../store'
import utils from '@/utils/utils'
import { getToken } from '@/utils/auth'



// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['token'] = getToken()
    }
    return config
  },
  error => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 20000) {

      // 提示报错信息
      utils.showMsg(res.message, 'warning')

      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        utils.showConfirm('你已被登出，可以取消继续留在该页面，或者重新登录', '', 'warning', '重新登录', '', function () {
          // 重新登陆
          // store.dispatch('FedLogOut').then(() => {
          //   location.reload() // 为了重新实例化vue-router对象 避免bug
          // })
        })

      }
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    // 提示报错信息
    utils.showMsg(error.message, 'warning')
    return Promise.reject(error)
  }
)

export default service
