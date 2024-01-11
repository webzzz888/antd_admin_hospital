import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from './user/index.ts'

// 创建store 用来创建store对象，需要一个配置对象作为参数
const store = configureStore({
  reducer:{
      user:userReducer,
  }
});

export default store;