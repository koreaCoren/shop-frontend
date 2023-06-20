import axios from "./axios";
import { handleConnectionError, handleApiError } from "./handleError";

// 메시지 보내기
const sendMessage = async (data) => {
    try {
        const res = await axios.post("", data);
        handleConnectionError(res.data);
    } catch (error) {
        handleApiError(error);
    }
}

// 메시지 가져오기
const getMessage = async (success) => {
    try {
        const res = await axios.get("");
        handleConnectionError(res.data);
        success();
    } catch (error) {
        handleApiError(error);
    }
}

export { sendMessage, getMessage }