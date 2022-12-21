import { useRoutes, useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { message } from 'antd'
import router from './router' // {路由表}


// 去往登录页的组件
function ToLogin() {
  const navigateTo = useNavigate()
  // 加载完这个组件之后实现跳转
  useEffect(() => {
    // 加载完组件之后执行这里的代码
    navigateTo("/login");
    message.warning("您还没有登录，请登录后再访问！");
  }, [])
  return <div></div>
}
// 去往首页的组件
function ToPage1() {
  const navigateTo = useNavigate()
  // 加载完这个组件之后实现跳转
  useEffect(() => {
    // 加载完组件之后执行这里的代码
    navigateTo("/page1");
    message.warning("您已经登录过了！");
  }, [])
  return <div></div>
}


const BeforeRouterEnter = () => {
  const outlet = useRoutes(router)  //将路由表存入

  /* 
      后台管理系统两种经典的跳转情况
    1.如果访问的是登录页面 并且有token 跳转到首页
    2.如果访问的不是登录页面 并且没有token  跳转到登录页
    3.其余都可正常放行
  */
  const location = useLocation()
  const token = localStorage.getItem('react-ts-token')

  // 如果访问的是登录页面 并且有token 跳转到首页
  if (location.pathname === "/login" && token) {
    return <ToPage1 />
    // 如果访问的不是登录页面 并且没有token  跳转到登录页
  } else if (location.pathname !== "/login" && !token) {
    return <ToLogin />
    // 其余全部放行
  } else {
    return outlet
  }
}

const App = () => {
  return (
    <div>
      <BeforeRouterEnter />
    </div>
  )
}

export default App
