import axios from "axios";

// 어드민 상품리스트
export const test = async (t1, t2) => {
    const url = `https://apis.tracker.delivery/carriers/${t1}/tracks/${t2}`;
    const res = await axios.get(url);
    return res;
}

export default test;