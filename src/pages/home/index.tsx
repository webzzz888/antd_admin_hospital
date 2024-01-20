import React from 'react'
import { Navigate } from 'react-router-dom'
import Layout from './Layout';
import { getToken } from '../../utils/util';

export default function Home() {
    // 获取token
    const token = getToken()

  return (
    <>
    {
      token ? <Layout /> : <Navigate to='/login' />
    }
    </>
  )
}
