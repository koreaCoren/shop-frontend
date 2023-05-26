import axios from './axios';
import { handleApiError, handleConnectionError } from './handleError';

// 로그인
const login = async (data) => {
    try {
        const res = await axios.post('/user/sel_user', data);
        handleConnectionError(res.data);
        if (res.data.loginCheck === 'success') {
            sessionStorage.setItem('token', res.data.token);
            return 'ok';
        } else {
            alert('아이디 또는 비밀번호가 틀렸습니다.');
            return 'fail';
        }
    } catch (error) {
        handleApiError(error);
    }
};

// 비밀번호 확인
const passwordCheck = async (data, success) => {
    try {
        const res = await axios.post('/user/check_pw', data);
        handleConnectionError(res.data);
        success(res.data)
    } catch (error) {
        handleApiError(error);
    }
};

export { login, passwordCheck };