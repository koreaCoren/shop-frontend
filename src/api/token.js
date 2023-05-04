import axios from './axios';
import { handleApiError, handleTokenError } from './handleApiError';

// 로그인
const tokenCheck = async (success) => {
    try {
        const token = sessionStorage.getItem("token");

        if (token !== null) {
            const userId = sessionStorage.getItem("userId");

            const headers = {
                "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
                "Content-Type": "application/json",
            };

            const res = await axios.post("/user/checkToken", {}, { headers: headers });

            if (res.data.result === "ok") {
                if (userId === null) {
                    sessionStorage.setItem("userId", res.data.id);
                } else {
                    if (res.data.res === "renew") {
                        sessionStorage.setItem("token", res.data.Atoken);
                        sessionStorage.setItem("userId", res.data.id);
                    } else if (userId !== res.data.id) {
                        handleTokenError("아이디값이랑 토큰값 불일치로 인해 로그아웃 됩니다.");
                    }
                }

                success(res.data);
            } else {
                if (res.data.error === "E00") {
                    handleTokenError("올바르지 않은 토큰값 로그아웃 됩니다.\n error code : E00");
                } else if (res.data.error === "E01") {
                    handleTokenError("액세스 토큰 만료. \n error code : E01");
                } else if (res.data.error === "E02") {
                    handleTokenError("다른 브라우저에서 로그인을 시도하여 로그아웃 됩니다. \n error code : E02");
                } else if (res.data.error === "E03") {
                    handleTokenError("리프레시 토큰 만료. \n error code : E03");
                } else if (res.data.error === "E05") {
                    handleTokenError("토큰값이 일치하지 않습니다 로그아웃 됩니다. \n error code : E05");
                } else if (res.data.error === "E06") {
                    handleTokenError("다른 브라우저에서 로그인을 시도하여 로그아웃 됩니다. \n error code : E06");
                } else if (res.data.error === "E07") {
                    handleTokenError("알 수 없는 에러으로 로그아웃 됩니다. \n error code : E07");
                } else {
                    handleTokenError("알 수 없는 에러으로 로그아웃 됩니다. \n error code : unknown");
                }
            }
        }
    } catch (error) {
        handleApiError(error);
    }
};

export { tokenCheck };