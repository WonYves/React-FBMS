const store =  {
    state:{
        num: 20
    },
    actions:{
        add1(newState:{num:number}){
            newState.num++
        },
        add2(newState:{num:number}, action:{type:string, value:number}){
            newState.num+=action.value
        },
        add3(newState:{num:number}, action:{type:string}){
            setTimeout(()=>{
                newState.num++
            },1000)
        },
    },
    // 方法名称统一管理
    actionNames:{}
}

let actionNames = {}
for(let key in store.actions){
    actionNames[key] = key
}

store.actionNames = actionNames

export default store