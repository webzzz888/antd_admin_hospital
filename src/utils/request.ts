import { message } from "antd"
import axios from "axios"
import { getToken } from "./util"

console.log(process.env)
const request = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? 'http://192.168.3.70:49998': 'http://192.168.3.70:80', //后端处理跨域，直接写后端地址
  // baseURL: '/api',
  timeout: 5000
})


request.interceptors.request.use(config => {
  const token = getToken()
  if(token){
    config.headers['Authorization'] = token
  }
  return config
})

request.interceptors.response.use((response:any) => {
  const data = response.data
  if(data.code === 200){
    return response.data
  }else{
    return Promise.reject(new Error(data.message))
  }
},(error) => {
  let status = error.response.status
  switch(status){
    case 404:
      message.error('请求路径出错了')
      break
  }

  return Promise.reject(new Error(error.message))
})


export default request