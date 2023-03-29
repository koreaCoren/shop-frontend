import axios from "axios";

//토큰 
export const TOKEN = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/user/checkToken`,
})

// 접속자 집계
export const USER_COUNT = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/data/user_count`
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

//에디터 관련 (게시판, 어드민 상품등록 등등)
export const EDITOR_REGISTER = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/editor/ins_editor_data`,
})

// 게시판 출력
export const READ_BOARD = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/board/sel_board`
})

// 게시글 디테일
export const DETAIL_BOARD = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/board/detail_board`
})

// 게시글 조회수 상승
export const VIEW_BOARD = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/board/view_up`
})

// 게시글 삭제
export const DELETE_BOARD = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/board/del_notice`
})

// 구매한 상품 리스트 (리뷰용)
export const BUY_PRODUCT_LIST = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/user/sel_user_review`
})

// 메인 리뷰 리스트
export const MAIN_REVIEW = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/board/sel_main_review`
})

//--------- 어드민 관련 시작 ---------

// 어드민 대시보드

export const SEL_DASH = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/order/sel_dash`,
})

// 상품 판매 금액 리스트
export const SELL_DATA_LIST_API = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/data/sell_data_list`,
})

// 누적 판매 리스트
export const ACCUMULATE_SELL_DATA_API = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/data/cumulative_sales`
})

// 방문자 수
export const USER_ACCESS_COUNT = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/data/sel_user_count`
})

//회원 관리
export const USER = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/user/sel_user_list`
})

// 회원 삭제
export const USER_DELETE = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/user/del_user`
})

// 어드민 상품리스트
export const TEST = axios.create({
    baseURL: `https://apis.tracker.delivery/carriers/kr.cjlogistics/tracks/564363707014`,
})

// 어드민 상품리스트
export const PRODUCT_LIST_API = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/goods/sel_goods`,
})

// 어드민 특정 상품 불러오기(수정에 사용)
export const PRODUCT_SEL_API = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/goods/detail_goods`
})

// 어드민 상품수정
export const PRODUCT_EDIT_API = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/goods/upd_goods`
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

// 어드민 주문 관리 송장번호 수정
export const UPDATE_INVOICE_CODE = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/order/update_invoice`
})
// 기본 배송지 설정
export const DEFAULT_DELIVERY = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/delivery/default_carrier`
})

// 설정된 기본 배송지
export const DEFAULT_SELECT = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/delivery/sel_default_carrier`
})

// 송장 미입력 리스트
export const NULL_INVOICE = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/delivery/sel_delivery_null`
})

// 송장 번호 전체 업데이트
export const DELIVERY_INPUT = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/delivery/upd_order_delivery`
})
// 송장 번호 개별 업데이트
export const DELIVERY_UPDATE = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/delivery/upd_order_each_delivery`
})

// 배송사 업데이트
export const CARRIER_UPDATE = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/delivery/upd_order_carrier`
})

//--------- 어드민 관련 끝 ---------

//--------- 마이페이지 ---------

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
export const ADDRESS_LIST = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/delivery/address_list`,
})

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

//찜한 상품
export const REQ_PICK_LIST = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/user/sel_pick_list`,
})

//좋아요 리스트 받기
export const GET_FAV_LIST = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/user/sel_fav`
})

//상품 좋아요
export const SET_FAV = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/user/set_fav`,
})

//리뷰 리스트 받기
export const REQ_REIVEW = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/board/sel_goods_review`,
})

//---------마이페이지 끝 --------

//--------- 상품 관련 ----------

