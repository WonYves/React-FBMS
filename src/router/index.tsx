import React, { lazy } from 'react'  // 懒加载
import { Navigate } from "react-router-dom" /// Navigate 重定向组件

const Home = lazy(()=>import('../view/Home'))
const Page1 = lazy(()=>import('../view/Page1'))
const Page2 = lazy(()=>import('../view/Page2'))

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
        ]

    },
    // ===================================  嵌套路由
]

export default routes