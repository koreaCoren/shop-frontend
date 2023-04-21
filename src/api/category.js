import axios from "./axios";
import { handleApiError } from "./handleApiError";

// 카테고리 가져오기
const getCategory = async (success) => {
    try {
        const res = await axios.get("/goods/sel_category");
        success(res.data);
    } catch (error) {
        handleApiError(error);
    }
}

// 카테고리 생성
const addCategory = async () => {
    try {
        const res = await axios.post("/goods/ins_category");
        alert("저장완료");
    } catch (error) {
        handleApiError(error);
    }
}

export { getCategory, addCategory }