// 存储token
export function setToken(token){
  sessionStorage.setItem('token',token)
}

// 清除token
export function clearToken(){
  sessionStorage.removeItem('token')
}

// 获取token
export function getToken(){
  return sessionStorage.getItem('token')
}