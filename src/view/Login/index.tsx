import styles from './login.module.scss'
import initLoginBg from './init.ts'
import { useEffect } from 'react'
const Login = () => {

    useEffect(()=> {
        initLoginBg()
        window.onresize = () => {initLoginBg()}
        // 窗口发生改变 做背景初始化
    }, [])

    return (
        <div className={styles.loginPage}>
            {/* 存放背景 */}
            <canvas id='canvas' style={{display: 'block'}}></canvas>
            登录
        </div>
    )
}

export default Login