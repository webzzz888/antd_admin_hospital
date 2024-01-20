import React from 'react'
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  AppstoreOutlined
} from '@ant-design/icons'
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom';

export default function CusMenu() {
  const navigator = useNavigate()

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['dashboard']}
      onClick={({key}) => navigator(key)}
      items={[
        {
          key: 'dashboard',
          icon: <UserOutlined />,
          label: '首页',
        },
        {
          key: 'system',
          icon: <VideoCameraOutlined />,
          label: '系统管理',
          children: [
            {
              key: 'user',
              icon: <AppstoreOutlined />,
              label: '用户管理',
            },
            {
              key: 'role',
              icon: <AppstoreOutlined />,
              label: '角色管理',
            },
          ]
        },
        {
          key: 'hospital',
          icon: <UploadOutlined />,
          label: '医院管理',
        },
      ]}
    />
  )
}
