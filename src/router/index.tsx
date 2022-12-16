import { lazy } from 'react'
import Home from '../view/Home'
import About from '../view/About'
/// Navigate 重定向组件
import { Navigate } from "react-router-dom"


const routes = [
    {
        path:'/',
        element:<Navigate to='/home'/>
    },
    {
        path:'/home',
        element:<Home />

    },
    {
        path:'/about',
        element:<About />
    }
]

export default routes