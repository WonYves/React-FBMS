import request from "../utils/requset"
import API from "./API"
// 验证码图片 
export const captchaAPI = ():Promise<CaptchaAPIRes> => request({
    url: API.PROD_API_CAPTCHAIMAGE,
    method: 'get',
})
// 登录
export const loginAPI = (params:LoginAPIReq):Promise<LoginAPIRes> => request({
    url: API.PROD_API_LOGIN,
    method: 'post',
    data: params
})