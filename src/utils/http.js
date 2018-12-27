import axios from 'axios'
import {Message} from 'element-ui'
import router from './../router/'

// 创建一个axios实例
const service = axios.create({
  // 存在一些场景，借口一部分调这个地址一部分调另外一个地址
  // baseURL: process.env.BASE_API,
  // timeout: 5000, // 超时时间
  withCredentials: true // 允许携带cookie
})

// 请求发送处理
service.interceptors.request.use(
  config => {
    // console.log(config)
    // 可以对用户权限进行请求进行拦截 Promise.reject(error)
    // 在发送请求做一些事情
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded' // 设置很关键
    }
    return config
  },
  error => {
    // 发送请求失败报错
    // console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    if (!response.status) {
      // 请求异常
      Message({
        showClose: true,
        message: response.message,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject('error')
    } else {
      // 请求成功
      if (!response.data.status) {
        Message({
          showClose: true,
          message: response.data.message,
          type: 'error',
          duration: 5 * 1000
        })
        if (response.data.code == 1011) {
          router.push({path: '/'})
        }
      }
      return response.data;
    }
  },
  error => {
    console.log('err' + error); // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
