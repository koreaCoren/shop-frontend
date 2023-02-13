import axios from "axios";

// 어드민 상품리스트
export const test = async (data) => {

    const url = `https://apis.tracker.delivery/carriers/${data.carrier}/tracks/${data.delivery}`;
    const api = await axios.get(url);
    return api.res;
}

export default test;