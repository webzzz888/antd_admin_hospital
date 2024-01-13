import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector} from "react-redux";
import Layout from './Layout';

export default function Home() {
  // useSelector用户加载state中的数据
  const userData = useSelector((state: {
    user: {
      isLogin: Boolean
    } 
  }) => state.user)    

  return (
    <>
    {
      userData.isLogin ? <Layout /> : <Navigate to='/login' />
    }
    </>
  )
}
