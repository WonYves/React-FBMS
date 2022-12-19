// 准备数据
const defaultState = {
    num: 20
}


let reducer = (state = defaultState, ) => {

    let newState = JSON.parse(JSON.stringify(state))   //深拷贝

    // switch() {

    // }

    return newState
}

export default reducer