import axios from "./axios";
import { handleApiError, handleConnectionError } from "./handleError";

// 메인으로 리다렉션 시켜줌
const refresh = () => {
    try {
        const res = axios.get("/user/refresh_page");
        handleConnectionError(res.data);
    } catch (error) {
        handleApiError(error)
    }
}

export { refresh }