import axios from "axios";

//토큰 api
export const token = axios.create({
    baseURL: `/user/break_token`,
})

//로그인 관련 api
export const loginApi = axios.create({
    baseURL: `/user/sel_user`,
});