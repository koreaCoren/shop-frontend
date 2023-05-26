import axios from './axios';
import { handleApiError, handleConnectionError, handleTokenError } from './handleError';

const getToken = () => {
    return sessionStorage.getItem('token');
};

const getUserId = () => {
    return sessionStorage.getItem('userId');
};

const setUserId = (userId) => {
    sessionStorage.setItem('userId', userId);
};

const setToken = (token) => {
    sessionStorage.setItem('token', token);
};

const getHeaders = () => {
    const token = getToken();

    return {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };
};

// 토큰체크
const tokenCheck = async (success) => {
    try {
        const token = getToken();

        if (token) {
            const userId = getUserId();
            const headers = getHeaders();

            const res = await axios.post('/user/checkToken', null, { headers: headers });

            handleConnectionError(res.data);

            if (res.data.result === 'ok') {
                if (!userId) {
                    setUserId(res.data.id);
                } else {
                    if (res.data.res === 'renew') {
                        setToken(res.data.Atoken);
                        setUserId(res.data.id);
                    } else if (userId !== res.data.id) {
                        handleTokenError('아이디값이랑 토큰값 불일치로 인해 로그아웃 됩니다.');
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