import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Form, Input, Button, Checkbox, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {userLogin} from '../utils/api';

const {Link} = Typography

const Login = () => {
  const history = useHistory()

  const [data, setData] = useState({
    initialValues: localStorage.getItem('loginInfo') ? 
      JSON.parse(localStorage.getItem('loginInfo')) :
      {}
  })

  // useEffect(() => {
  //   const obj = localStorage.getItem('loginInfo') ? 
  //     JSON.parse(localStorage.getItem('loginInfo')) : {};
  //   if (obj.remember) {
  //     setData(data => {
  //       return {
  //         ...data,
  //         initialValues: obj
  //       }
  //     })
  //   }
  // }, [])

  const login = async (values) => {
    if (values.remember) {
      localStorage.setItem('loginInfo', JSON.stringify(values))
    } else {
      localStorage.removeItem('loginInfo')
    }

    const res = await userLogin(values)
    if (res.status === 0) {
      sessionStorage.setItem('username', res.result[0].username);
      sessionStorage.setItem('auth', JSON.stringify(res.result[0].auth))

      history.push('/admin')
    }
  }

  const onFinish = (values) => {
    login(values)
  }

  return (
    <div style={{width: '300px', padding: '20px', margin: '50px auto', border: '1px solid #333'}}>
      <Form
          name="normal_login"
          className="login-form"
          onFinish={onFinish}
          initialValues={data.initialValues}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Link className="login-form-forgot">
              Forgot password
            </Link>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <Link href="">register now!</Link>
          </Form.Item>
        </Form>
    </div>
  );
}

export default Login;