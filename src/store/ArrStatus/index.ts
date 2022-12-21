const store =  {
    state:{
        arr: [10,20,30]
    },
    actions:{
        arrpush(newState:{arr:number[]},action:{type:string,value:number}){
            newState.arr.push(action.value)
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