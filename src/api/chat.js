// import axios from "./axios";
import axios from "axios";
import { handleConnectionError, handleApiError } from "./handleError";

// 메시지 보내기
const updateMessage = async (data) => {
    try {
        const res = await axios.post("http://192.168.0.100/chat/_find", {
            "selector": {
                "user_id": "test_id2"
            }
        });
        handleConnectionError(res.data);
    } catch (error) {
        // handleApiError(error);
    }
}

// 메시지 가져오기
const getMessage = async (data, success) => {
    try {
        const res = await axios.post("", data);
        handleConnectionError(res.data);
        success(res.data);
    } catch (error) {
        handleApiError(error);
    }
}

export { updateMessage, getMessage }