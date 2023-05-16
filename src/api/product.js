import axios from "./axios";
import { handleApiError, handleConnectionError } from "./handleError";

// 상품 리스트 가져오기
const getProduct = async (data, success) => {
    try {
        if (data.sort_type !== "all") {
            data.sort_type = "none";
        }
        const res = await axios.post("/goods/sel_goods", data);
        // handleConnectionError(res.data);
        success(res.data);
    } catch (error) {
        handleApiError(error);
    }
}

// 상품 상세 정보 가져오기
const getDetailProduct = async (data, success) => {
    try {
        const res = await axios.post("/goods/detail_goods", data);
        handleConnectionError(res.data);
        success(res.data.result);
    } catch (error) {
        handleApiError(error);
    }
}

// 상품 삭제
const deleteProduct = async (data) => {
    try {
        if (window.confirm("정말로 삭제 하시겠습니까?")) {
            const res = await axios.post("/goods/del_goods", data);
            handleConnectionError(res.data);
            window.location.reload();
        }
    } catch (error) {
        handleApiError(error);
    }
}

// 상품 수정
const updateProduct = async (data) => {
    try {
        const res = await axios.post("/goods/upd_goods", data);
        handleConnectionError(res.data);
        alert("수정완료");
        window.location.replace("/admin/product/1");
    } catch (error) {
        handleApiError(error);
    }
}

// 상품 판매 현황
const getProductSaleStatus = async (success) => {
    try {
        const res = await axios.get("/data/sell_data_list");
        handleConnectionError(res.data);
        success(res);
    } catch (error) {
        handleApiError(error);
    }
}

// 상품 누적 판매 TOP5
const getAccumulateSell = async (success) => {
    try {
        const res = await axios.get("/data/cumulative_sales");
        handleConnectionError(res.data);
        success(res);
    } catch (error) {
        handleApiError(error);
    }
}

// 상품 리뷰 가져오기
const getProductReivew = async (data, success) => {
    try {
        const res = await axios.post("/board/sel_goods_review", data);
        handleConnectionError(res.data);
        success(res);
    } catch (error) {
        handleApiError(error);
    }
}

// 상품 정렬 설정
const setProudctSorting = async (data) => {
    try {
        const res = await axios.post("/goods/sort_goods_upd", data);
        handleConnectionError(res.data);
    } catch (error) {
        handleApiError(error);
    }
}
// 상품 수동 정렬 설정
const setProudctManualSorting = async (data) => {
    try {
        const res = await axios.post("/goods/goods_rank_upd", data);
        handleConnectionError(res.data);
        return "ok";
    } catch (error) {
        handleApiError(error);
    }
}

export {
    getProduct,
    getDetailProduct,
    deleteProduct,
    updateProduct,
    getProductSaleStatus,
    getAccumulateSell,
    getProductReivew,
    setProudctSorting,
    setProudctManualSorting
};