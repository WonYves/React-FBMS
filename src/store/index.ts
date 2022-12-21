import { legacy_createStore, combineReducers } from 'redux'    // 1.创建store仓库
import NumstatusReducer from './NumStatus/reducer'
import ArrstatusReducer from './ArrStatus/reducer'


const reducers = combineReducers({
    NumstatusReducer,
    ArrstatusReducer
})
 
// 创建数据仓库
// window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__()  
// 让浏览器redux插件能正常使用
const stroe = legacy_createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 


export default stroe