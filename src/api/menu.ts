import request from "../util/requset"
import Api from "./API"

export const getMenu = (params: any) => request({
    url: '',
    method: 'get',
    params,
})