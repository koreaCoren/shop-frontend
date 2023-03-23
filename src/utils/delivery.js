import axios from "axios";

// 배송상황 리턴
export const track = async (carrier, delivery, trackResult) => {
    if (carrier && delivery) {
        const url = `https://apis.tracker.delivery/carriers/${carrier}/tracks/${delivery}`;
        const res = await axios.get(url);
        trackResult.push(res.data.state.text);
    } else {
        trackResult.push('');
    }
}

export const deliveryStatus = async (req) => {
    let arr = [];
    for (const el of req) {
        if (el.carrier !== "" || el.delivery !== "") {
            const url = `https://apis.tracker.delivery/carriers/${el.carrier}/tracks/${el.delivery}`;
            try {
                const res = await axios.get(url);
                arr.push(res.data.state.text);
            } catch (err) {
                arr.push("");
            }
        } else {
            arr.push("");
        }
    }
    return arr;
}

// 어드민 기본 배송지 목록 가져오기
export const getDeliveryList = () => {
    const url = `https://apis.tracker.delivery/carriers`;
    const res = axios.get(url);
    return res;
}