import axios from "axios";

//토큰 
export const TOKEN = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/user/checkToken`,
})

//로그인
export const LOGIN_API = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/user/sel_user`,
});

//회원가입
export const REGISTER_API = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/user/ins_user`,
});

//로그아웃
export const LOGOUT_API = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/user/break_token`,
});

//상품리스트
export const PRODUCT_LIST_API = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/goods/sel_goods`,
})

//상품등록
export const PRODUCT_REGISTER_API = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/goods/ins_goods`,
})

//상품삭제
export const PRODUCT_DELETE_API = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/goods/del_goods`,
})

//카테고리 리스트
export const CATEGORY_LIST_API = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/goods/sel_category`,
})

//카테고리 저장
export const CATEGORY_SAVE_API = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/goods/ins_category`,
})