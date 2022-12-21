import request from "../utils/requset"
import API from "./API"

export const captchaAPI = ():Promise<CaptchaAPIRes> => request({
    url: API.PROD_API_CAPTCHAIMAGE,
    method: 'get',
})