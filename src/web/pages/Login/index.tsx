import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import './index.scss'

const Login = () => {
  return (
    <>
      <div className="login-container">
        <h3 className="title">YD-CRM</h3>
        <Form className="login-form">
          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary">
              <NavLink to="/">Login</NavLink>
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}

export default Login