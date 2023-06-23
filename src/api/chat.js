import axios from "./axios";
import { handleConnectionError, handleApiError } from "./handleError";

// 메시지 보내기
const updateMessage = async (data) => {
    try {
        const res = await axios.post("/chat/send_message", data);
        // handleConnectionError(res.data);
    } catch (error) {
        // handleApiError(error);
    }
}

// 메시지 가져오기
const getMessage = async (data, success) => {
    try {
        const res = await axios.post("/chat/sel_content", data);
        handleConnectionError(res.data);
        success(res.data);
    } catch (error) {
        handleApiError(error);
    }
}

export { updateMessage, getMessage }