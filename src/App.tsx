import React from 'react'
import styles from './App.module.css'
import routes from './routes'
import { useRoutes } from 'react-router-dom'

export default function App() {
  //根据路由表生成对应的路由规则
  const element = useRoutes(routes)
  
  return (
    <div className={styles.layout}>
      {/* 注册路由 */}
      {element}
    </div>
  )
}
