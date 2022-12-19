import React, { lazy } from 'react'  // 懒加载
import { Navigate } from "react-router-dom" /// Navigate 重定向组件

const Home = lazy(()=>import('../view/home'))
const Page1 = lazy(()=>import('../view/page1'))
const Page2 = lazy(()=>import('../view/page2'))
const Page301 = lazy(()=>import('../view/page301'))

const withLoading = (view:JSX.Element) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        {view}
    </React.Suspense>
)

const routes = [
    {
        path:'*',
        element:<Navigate to='/page1'/>,   // 重定向
    },
    {
        path:"/",
        element:<Navigate to='/page1'/>,   // 重定向
    },
    // ===================================  嵌套路由
    {
        path:"/",
        element:<Home />,
        children:[
            {
                path:'/page1',
                element:withLoading(<Page1 />)
            },
            {
                path:'/page2',
                element:withLoading(<Page2 />)
            },
            {
                path:'/page3/page301',
                element:withLoading(<Page301 />)
            },
        ]

    },
    // ===================================  嵌套路由
]

export default routes