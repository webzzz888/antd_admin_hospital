// createSlice 创建reducer的切片
// 它需要一个配置对象作为参数，通过对象的不同的属性来指定它的配置
import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user', // 用来自动生成action中的type
    initialState:{
        userName: '',
        password: '',
        remember: false
    }, // state的初始值
    reducers:{ // 指定state的各种操作，直接在对象中添加方法
        setUser(state, action){
            state.userName = action.payload?.userName;
            state.password = action.payload?.password
            state.remember = action.payload?.remember;
        },
       
    }
});

// 切片对象会自动的帮助我们生成action
// actions中存储的是slice自动生成action创建器（函数），调用函数后会自动创建action对象
// action对象的结构 {type:name/函数名, payload:函数的参数}
export const {setUser} = userSlice.actions;
export const {reducer:userReducer} = userSlice;
