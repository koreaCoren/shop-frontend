import axios from "./axios";
import { handleApiError } from "./handleApiError";

// 상품 리스트 가져오기
const getProdcut = async (success) => {
    try {
        const res = await axios.get("/goods/sel_goods");
        success(res.data);
    } catch (error) {
        handleApiError(error);
    }
}

// 상품 상세 정보 가져오기
const getDetailProdcut = async (data) => {
    try {
        const res = await axios.post("/goods/detail_goods", data);
        data.result = res.data.result;
    } catch (error) {
        handleApiError(error);
    }
}

// 상품 삭제
const deleteProduct = async (data) => {
    try {
        if (window.confirm("정말로 삭제 하시겠습니까?")) {
            const res = await axios.post("/goods/del_goods", data);
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
        alert("수정완료");
        window.location.replace("/admin/product");
    } catch (error) {
        handleApiError(error);
    }
}

// 상품 판매 현황
const getProductSaleStatus = async (success) => {
    try {
        const res = await axios.get("/data/sell_data_list");
        success(res);
    } catch (error) {
        handleApiError(error);
    }
}

// 상품 누적 판매 TOP5
const getAccumulateSell = async (success) => {
    try {
        const res = await axios.get("/data/cumulative_sales");
        success(res);
    } catch (error) {
        handleApiError(error);
    }
}

export { getProdcut, getDetailProdcut, deleteProduct, updateProduct, getProductSaleStatus, getAccumulateSell };