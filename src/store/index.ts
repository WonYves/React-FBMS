import { legacy_createStore } from 'redux'    // 1.创建store仓库
import reducer from './reducer.ts'

// 创建数据仓库
// window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__()  
// 让浏览器redux插件能正常使用
const stroe = legacy_createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 


export default stroe