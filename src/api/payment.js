import axios from "./axios";
import { handleApiError, handleConnectionError } from "./handleError";

// 상품 리스트 가져오기
const payMentRequest = async (data) => {
    try {
        const res = await axios.post("/order/tos_ins", data);
        handleConnectionError();
    } catch (error) {
        handleApiError(error);
    }
}

export { payMentRequest };