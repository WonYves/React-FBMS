import styles from './login.module.scss'
import initLoginBg from './init.ts'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Button, Input, Space, Form, message } from 'antd';
import { captchaAPI, loginAPI } from '../../api/menu'
import './login.less'
const Login = () => {

    const navigateTo = useNavigate()
    const [captchaImg, setCaptchaImg] = useState('')

    // 验证码图片盒子请求
    const getImage = useCallback(async () => {
        const res = await captchaAPI()
        if (res.code === 200) {
            console.log(res)
            // 把图片数据显示
            setCaptchaImg('data:image/gif;base64,' + res.img)
            // 本地保存uuid 给登录的时候用
            localStorage.setItem('uuid', res.uuid)

        }
    }, [])

    // 登录请求
    const postlogin = useCallback(async(params:any) => {
        const res = await loginAPI(params)
        if (res.code === 200) {
            console.log(res);
            // 1.提示登录成功
            message.success('登录成功')
            // 2.保存token
            localStorage.setItem('react-ts-token', res.token)
            // 3.跳转页面
            navigateTo('/page1')
            // 4.删除本地保存中的uuid
            localStorage.removeItem('uuid')
        }
    }, [])

    useEffect(() => {
        initLoginBg()
        window.onresize = () => { initLoginBg() }
        // 窗口发生改变 做背景初始化
        getImage()
    }, [])

    const onFinish = (values: ChangeEvent<HTMLInputElement>) => {
        const uuid = localStorage.getItem('uuid')        
        postlogin({...values, uuid})
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
                            <Form.Item name='username' rules={[{ required: true, message: '请输入用户名' }]} >
                                <Input placeholder="用户名" className='ipt' />
                            </Form.Item>
                            <Form.Item name='password' rules={[{ required: true, message: '请输入密码'}]}>
                                <Input.Password placeholder="密码" className='ipt' />
                            </Form.Item>
                            <div className='captchaBox'>
                                <Form.Item name='code' rules={[{ required: true, message: '请输入验证码'}]}>
                                    <Input placeholder="验证码" className='ipt' />
                                </Form.Item>
                                <div className="captchaImg" onClick={getImage}>
                                    <img src={captchaImg} height="38" />
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