import axios from "./axios";
import { handleApiError } from "./handleError";

// 기본 배송사 가져오기
const getDefaultSelect = async (success) => {
    try {
        const res = await axios.get("/delivery/sel_default_carrier");
        success(res);
    } catch (error) {
        handleApiError(error);
    }
}

// 기본 배송사 설정
const setDefaultCarrier = async (data) => {
    try {
        const res = await axios.post("/delivery/default_carrier", data);
        alert("저장완료");
    } catch (error) {
        handleApiError(error);
    }
}

// 배송사 수정
const updateCarrier = async (data) => {
    try {
        const res = await axios.post("/delivery/upd_order_carrier", data);
        alert("저장완료");
    } catch (error) {
        handleApiError(error);
    }
}

// 송장번호 입력
const addInvoice = async (data) => {
    try {
        const res = await axios.post("/delivery/upd_order_delivery", data);
        res.data.result === "Success" ? alert("저장완료") : alert(res.data.result);
        window.location.reload();
    } catch (error) {
        handleApiError(error);
    }
}

// 송장번호 수정
const updateInvoice = async (data) => {
    try {
        const res = await axios.post("/delivery/upd_order_each_delivery", data);
        alert("저장완료");
    } catch (error) {
        handleApiError(error);
    }
}

// 송장번호 미입력 리스트
const getUndefinedInvoice = async (success) => {
    try {
        const res = await axios.get("/delivery/sel_delivery_null");
        success(res)
    } catch (error) {
        handleApiError(error);
    }
}

export {
    getDefaultSelect,
    setDefaultCarrier,
    addInvoice,
    updateCarrier,
    updateInvoice,
    getUndefinedInvoice
}