import { handleApiError } from './handleApiError';

// 로그인
const logout = async () => {
    try {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('userId');
        window.location.replace("/");
    } catch (error) {
        handleApiError(error);
    }
};

export { logout };