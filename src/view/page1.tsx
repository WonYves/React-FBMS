import {useSelector, useDispatch} from 'react-redux'   // 获取数据  通过hook useSelector
import numStatus from '../store/NumStatus'  // 调用异步函数需要引用
const Page1 = () => {
    // 通过 useSelector 获取仓库数据
    const { num, arr } = useSelector((state: RootState) => ({
        num: state.NumstatusReducer.num,
        arr: state.ArrstatusReducer.arr
    }))
    // 通过useDispatch 修改仓库数据
    const dispatch = useDispatch()
    const changeNum = () => {
        //  dispatch({type: '字符串(认为是一个记号)' , value: 3})  type是固定的 value是自定义
        // dispatch({type: 'add'})
        // 同步的写法
        dispatch({type: 'add2', value: 218})
    }
    const changeNum2 = () => {
        // 异步的写法
        // redux-thunk 的用法 格式： dispatch(异步执行的函数)
        dispatch(numStatus.asyncAcitons.asyncAdd1)
    }
    const changePush = () => {
        dispatch({type: 'arrpush', value: 50})
    }

    return(
        <div>
           Page1
           <p>{num}</p>
           <button onClick = {changeNum}>同步</button>
           <button onClick = {changeNum2}>异步</button>

           <p>{arr}</p>
           <button onClick = {changePush}>push</button>
        </div>
    )
}

export default Page1