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

//--------- 어드민 관련 시작 ---------

// 어드민 상품리스트
export const PRODUCT_LIST_API = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/goods/sel_goods`,
})

// 어드민 상품등록
export const PRODUCT_REGISTER_API = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/goods/ins_goods`,
})

// 어드민 상품삭제
export const PRODUCT_DELETE_API = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/goods/del_goods`,
})

// 어드민 카테고리 리스트
export const CATEGORY_LIST_API = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/goods/sel_category`,
})

// 어드민 카테고리 저장
export const CATEGORY_SAVE_API = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/goods/ins_category`,
})

// 어드민 주문 관리
export const ORDER_MANAGEMENT = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/order/sel_admin_orders`
})

// 어드민 주문 관리 디테일
export const ORDER_MANAGEMENT_DETAIL = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/order/sel_code_orders`
})

//--------- 어드민 관련 끝 ---------

//--------- 주문 관련 시작 ---------


// 주문확인
export const ORDER_List = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/order/sel_orders`
})

// 주문하기
export const ORDER = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/order/ins_orders`,
})

//주문 완료
export const ORDER_SUCCESS = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/order/sel_ini_orders`,
})

//--------- 주문 관련 끝 ---------

//--------- 개인정보 시작 -------

//배송지 확인
export const USER_ADDRESS = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/user/user_address`,
})
//유저 정보
export const USER_INFO = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/user/sel_user_data`,
})
//--------- 개인정보 끝 ---------