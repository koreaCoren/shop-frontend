import axios from "axios";

//토큰 
export const token = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/user/checkToken`,
})

//로그인
export const loginApi = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/user/sel_user`,
});

//회원가입
export const registerApi = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/user/ins_user`,
});

//로그아웃
export const logoutApi = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/user/break_token`,
});

//상품리스트
export const prodcutListApi = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/goods/sel_goods`,
})

export const prodcutRegisterApi = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/goods/ins_goods`,
})