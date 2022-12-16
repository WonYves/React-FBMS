import {useRoutes, Link} from 'react-router-dom'  //{ route的hook }
import router from './router' // {路由表}

const App = () => {
  const outlet = useRoutes(router)  //将路由表存入
  return (
    <div>
      <Link to='/home'>Home</Link>
      <Link to='/about'>About</Link>

      {/* 占位符 */}
      {outlet}
    </div>
  )
}

export default App
