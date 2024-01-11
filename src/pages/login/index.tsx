import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {setUser} from './../../store/user'

export default function Login() {
  const navigate = useNavigate()
   // 通过useDispatch()来获取派发器对象
   const dispatch = useDispatch();
  const goLayout = () => {
    dispatch(setUser({
      isLogin: true
    }))
    navigate("/",{
      replace: false,
    })
  }
  return (
    <div onClick={goLayout}>Login</div>
  )
}
