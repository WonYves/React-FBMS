import styles from './login.module.scss'
import initLoginBg from './init.ts'
import { ChangeEvent, useEffect } from 'react'
import { Button, Input, Space, Form } from 'antd';
import './login.less'
const Login = () => {

    useEffect(() => {
        initLoginBg()
        window.onresize = () => { initLoginBg() }
        // 窗口发生改变 做背景初始化
    }, [])

    const onFinish = (values:ChangeEvent<HTMLInputElement>) => {
        console.log(values);
    }

    return (
        <div className={styles.loginPage}>
            {/* 存放背景 */}
            <canvas id='canvas' style={{ display: 'block' }}></canvas>
            {/* 登录盒子 */}
            <div className={styles.loginBox + ' loginbox'}>
                <div className={styles.title}>
                    <h1>Wiess &nbsp; · &nbsp; 通用后台系统 </h1>
                    <p>React - Ts</p>
                </div>
                <div className='from'>
                    <Form
                    onFinish={onFinish}
                    >
                        <Space direction="vertical" size="large" style={{
                            display: 'flex'
                        }}>
                            <Form.Item name='username'>
                                <Input placeholder="用户名" className='ipt' />
                            </Form.Item>
                            <Form.Item name='password'>
                                <Input.Password placeholder="密码" className='ipt' />
                            </Form.Item>
                            <div className='captchaBox'>
                                <Form.Item name='uuid'>
                                    <Input placeholder="验证码" className='ipt' />
                                </Form.Item>
                                <div className="captchaImg">
                                    <img src="xxx" height="38" />
                                </div>
                            </div>
                            <Button type='primary' htmlType='submit' className='loginBtn' block>登录</Button>
                        </Space>
                    </Form>
                </div>

            </div>
        </div>
    )
}

export default Login