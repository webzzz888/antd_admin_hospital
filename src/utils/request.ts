import { message } from "antd"
import axios from "axios"

console.log(process.env)
const request = axios.create({
  // baseURL: process.env.NODE_ENV === "development" ? 'http://192.168.3.70:8080': '', //后端处理跨域，直接写后端地址
  baseURL: '/api',
  timeout: 5000
})


request.interceptors.request.use(config => config)

request.interceptors.response.use(response => response,(error) => {
  let status = error.response.status
  switch(status){
    case 404:
      message.error('请求路径出错了')
      break
  }

  return Promise.reject(new Error(error.message))
})


export default request