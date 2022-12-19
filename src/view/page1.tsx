import {useSelector, useDispatch} from 'react-redux'   // 获取数据  通过hook useSelector

const Page1 = () => {
    // 通过 useSelector 获取仓库数据
    const { num } = useSelector((state: RootState) => ({
        num: state.num
    }))
    // 通过useDispatch 修改仓库数据
    const dispatch = useDispatch()
    const changeNum = () => {
        //  dispatch({type: '字符串(认为是一个记号)' , value: 3})  type是固定的 value是自定义
        // dispatch({type: 'add'})
        dispatch({type: 'add2', value: 10})
    }

    return(
        <div>
           Page1
           <p>{num}</p>
           <button onClick = {changeNum}>++</button>
        </div>
    )
}

export default Page1