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

export const BOARD_WRITE = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/???`
})

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
export const ORDER_LIST = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/order/sel_orders`
})

// 유저 주문번호 주문확인
export const ORDER_CODE_LIST = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/order/sel_user_code_orders`
})

// 주문하기
export const ORDER = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/order/ins_orders`,
})

//주문 완료
export const ORDER_SUCCESS = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/order/sel_ini_orders`,
})

//유저 기본 배송지 불러오기
export const DELIVERY_LIST = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/order/delivery_list`
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
//유저 정보 업데이트
export const USER_UPDATE = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/user/upd_user`,
})

//신규 배송지 추가
export const ADD_ADDRESS = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/user/add_address`,
})

//배송지 삭제
export const DELETE_ADDRESS = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/user/del_address`,
})

//기본 배송지 설정
export const SET_DEFAULT_ADDR = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/user/set_default_address`,
})

//--------- 개인정보 끝 ---------