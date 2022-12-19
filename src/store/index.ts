import { legacy_createStore } from 'redux'    // 1.创建store仓库
import reducer from './reducer.ts'

// 创建数据仓库
const stroe = legacy_createStore(reducer) 


export default stroe