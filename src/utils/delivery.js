import axios from "axios";

// 배송상황 리턴
export const track = async (carrier, delivery, trackResult) => {
    const url = `https://apis.tracker.delivery/carriers/${carrier}/tracks/${delivery}`;
    const res = await axios.get(url);
    trackResult.push(res.data.state.text);
}

// 어드민 기본 배송지 목록 가져오기
export const getDeliveryList = () => {
    const url = `https://apis.tracker.delivery/carriers`;
    const res = axios.get(url);
    return res;
}