import axios from './axios';
import { handleApiError } from './handleError';

// 로그인
const login = async (data) => {
    try {
        const res = await axios.post('/user/sel_user', data);
        if (res.data.loginCheck === 'success') {
            sessionStorage.setItem('token', res.data.token);
            window.location.replace('/');
            return 'ok';
        } else {
            alert('아이디 또는 비밀번호가 틀렸습니다.');
            return 'fail';
        }
    } catch (error) {
        handleApiError(error);
    }
};

export { login };