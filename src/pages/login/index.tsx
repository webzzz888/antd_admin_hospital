import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from './../../store/user'
import { Button, Checkbox, Form, Input, message } from 'antd'
import styles from './index.module.css'
import { login } from './../../api/login/index'

type FieldType = {
  userName?: string
  password?: string
  remember?: string
}
export default function Login() {
  const navigate = useNavigate()
  // 通过useDispatch()来获取派发器对象
  const dispatch = useDispatch()
  // 登录
  const onFinish = async (values: any) => {
    try {
      const result: any = await login(values)
      if (result.code === 200) {
        message.success('登录成功')
        // 保存登录信息
        dispatch(
          setUser({
            isLogin: true,
            token: result.data,
          })
        )
        navigate('/', {
          replace: false,
        })
      }
    } catch (error: any) {
      console.log(error,111,555)
      message.error(error.message)
    }
  }

  return (
    <div className={styles.Login}>
      <div className={styles.Login_container}>
        <h1 className={styles.Login_title}>水星智慧医疗管理系统</h1>
        <Form
          size="large"
          labelCol={{ span: 4, offset: 2 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          requiredMark={'optional'}
        >
          <Form.Item<FieldType>
            label="用户名"
            name="userName"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 6, span: 16 }}
          >
            <Checkbox>记住密码</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 10, span: 6 }}>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.Login_btn}
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
