import {configureStore,combineReducers} from "@reduxjs/toolkit";
import { persistStore,persistReducer } from "redux-persist";
// 选择持久化存储引擎，如localStorage或AsyncStorage
import storage from 'redux-persist/lib/storage'
import {userReducer} from './user/index.ts'


const reducer = combineReducers({
  user: userReducer
})

// 配置持久化设置
const persistConfig = {
  key: 'root', // 存储的键名
  storage // 持久化存储引擎
  // 可选的配置项，如白名单、黑名单等 选其一就好了
  // blacklist:['test'], // 只有 test 不会被缓存
  // whitelist: ["test"], // 只有 test 会被缓存
}

const persist = persistReducer(persistConfig,reducer)
// 创建store 用来创建store对象，需要一个配置对象作为参数
const store = configureStore({
  reducer:persist,
  middleware: (getDefaultMiddleware) =>  getDefaultMiddleware({
    serializableCheck: false // 关闭默认的序列化检查//关闭严格模式
  })
});

export const persistor = persistStore(store)

export default store;