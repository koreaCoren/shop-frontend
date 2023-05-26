import axios from "./axios";
import { handleApiError, handleConnectionError } from "./handleError";

// 토스 결제
const payMentRequest = async (data) => {
    try {
        const res = await axios.post("/order/tos_ins", data);
        handleConnectionError();
    } catch (error) {
        handleApiError(error);
    }
}

export { payMentRequest };