import request from "../../utils/request";

export function test(){
  return request({
    url: '/home',
    method: 'get',
    data: {},
  })
}