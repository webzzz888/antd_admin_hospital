import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector} from "react-redux";

export default function Layout() {
  // useSelector用户加载state中的数据
  // const userData = useSelector((state: {
  //   user: {
  //     isLogin: Boolean
  //   }
  // }) => state.user)
  const userData = useSelector((state: any) => state.user)
  // console.log(userData)

  return (
    <>
    {
      userData.isLogin ? <div>Layout</div> : <Navigate to='/login' />
    }
    </>
  )
}
