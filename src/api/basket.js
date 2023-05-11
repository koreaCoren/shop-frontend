import axios from './axios';
import { handleApiError } from './handleError';

// 장바구니 상품 정보 가져오기
const getBasket = async (data, success) => {
    try {
        const res = await axios.post('/order/get_basket', data);
        handleConnectionError(res.data);
        success(res.data.result);
    } catch (error) {
        handleApiError(error);
    }
};

export { getBasket };