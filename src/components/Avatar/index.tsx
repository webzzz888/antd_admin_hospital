import React from 'react'
import type { MenuProps } from 'antd'
import { UserOutlined, LoginOutlined} from '@ant-design/icons'
import { Dropdown, Space ,Avatar} from 'antd'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.css'
import { clearToken } from '../../utils/util'

export default function CusAvatar () {
  // 获取路由导航
  const navigate = useNavigate()

  const loginOut = () => {
    // 清空token
    clearToken()
    // 删除登录状态
    navigate("/login",{
      replace: true
    })
  }

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.antgroup.com'
        >
          1st 
        </a>
      )
    },
    {
      key: '2',
      label: (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.aliyun.com'
        >
          2nd
        </a>
      )
    },
    {
      key: '3',
      label: (
        <span onClick={loginOut}>
          <LoginOutlined />
          <i className={styles.loginOut}>退出</i>
        </span>
      )
    }
  ]



  return (
    <div className={styles.avatar}>
      <Dropdown menu={{ items }} placement='bottom' arrow>
        <Space wrap size={8}>
          <Avatar size={32} icon={<UserOutlined />} />
          <span>admin</span>
        </Space>
      </Dropdown>
    </div>
  )
}
