import axios from "./axios";
import { handleApiError, handleConnectionError } from "./handleError";

// 카테고리 가져오기
const getCategory = async (success) => {
    try {
        const res = await axios.get("/goods/sel_category");
        handleConnectionError(res.data);
        success(res.data);
    } catch (error) {
        handleApiError(error);
    }
}

// 카테고리 생성
const addCategory = async (data) => {
    try {
        const res = await axios.post("/goods/ins_category", data);
        handleConnectionError(res.data);
        alert("저장완료");
    } catch (error) {
        handleApiError(error);
    }
}

export { getCategory, addCategory }