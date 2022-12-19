// 就是来管理数据的
const defaultState = {
    num: 20
}


let reducer = (state = defaultState, action:{type:string, value:number}) => {
    // 调用 dispatch 就会执行
    let newState = JSON.parse(JSON.stringify(state))   //深拷贝

    switch(action.type) {
        case 'add' : 
        newState.num ++
        break
        case 'add2' : 
        newState.num += action.value
        break
        default:
        break 
    }

    return newState
}

export default reducer