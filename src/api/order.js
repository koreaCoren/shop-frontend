import axios from "./axios";
import { handleApiError } from "./handleError";

// 주문리스트 가져오기
// 어드민일땐 모든 유저 주문정보 아니면 내 주문 정보
const getOrder = async (data, success) => {
    try {
        const res = await axios.post("/order/sel_orders", data);
        success(res.data)
    } catch (error) {
        handleApiError(error);
    }
}

// 주문코드 가져오기
const getOrderCode = async (data, success) => {
    try {
        const res = await axios.post("/order/sel_user_code_orders", data);
        success(res.data);
    } catch (error) {
        handleApiError(error);
    }
}

// 주문코드 상세정보 가져오기
const getDetailOrder = async (data, success) => {
    try {
        const res = await axios.post("/order/sel_code_orders", data);
        success(res.data)
    } catch (error) {
        handleApiError(error);
    }
}
// 주문요청
const requestOrder = async (data) => {
    try {
        const res = await axios.post("/order/ins_orders", data);
    } catch (error) {
        handleApiError(error);
    }
}

//구매 확정
const recognizeOrder = async (data) => {
    try{
        const res = await axios.post("/order/recognize_order", data);
        alert("등록완료");
        window.location.replace(`/myPage/orderDetail/${data.orderCode}`);
    } catch(error){
        handleApiError(error);
    }
}

// 주문취소
const cancelOrder = async (data) => {
    try {
        const res = await axios.post("/order/cancel_order", data);
        if (res.data.result.error === "E21") {
            alert("주문취소에 실패했습니다 관리자에 문의 부탁드립니다.");
        }
    } catch (error) {
        handleApiError(error);
    }
}

//환불/반품 요청
const returnOrder = async (data) => {
    try{
        const res = await axios.post("order/refund", data);
    }catch(error){
        handleApiError(error);
    }
}



// 주문완료
const completeOrder = async (data, success) => {
    try {
        const res = await axios.post("/order/sel_ini_orders", data);
        if (res.data[0].resultCode === "0000") {
            success(res.data[0]);
        } else {
            alert("알수없는 에러로 실패하였습니다. \n관리자에게 문의 부탁드립니다.");
            window.location.replace("/");
        }
    } catch (error) {
        handleApiError(error);
    }
}

// 주문 총 상황
const getTotalOrderStatus = async (success) => {
    try {
        const res = await axios.get("/order/sel_dash");
        success(res);
    } catch (error) {
        handleApiError(error);
    }
}

// 주문 리스트 다운로드
const downOrderList = async (success) => {
    try {
        const res = await axios.get("/order/admin_orders");
        success(res);
    } catch (error) {
        handleApiError(error);
    }
}

export {
    getOrder,
    getOrderCode,
    getDetailOrder,
    recognizeOrder,
    cancelOrder,
    returnOrder,
    requestOrder,
    completeOrder,
    getTotalOrderStatus,
    downOrderList
};

