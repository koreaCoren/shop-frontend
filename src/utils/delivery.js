import axios from "axios";

// 어드민 상품리스트
const test = async (t1, t2, why) => {
    const url = `https://apis.tracker.delivery/carriers/${t1}/tracks/${t2}`;
    const res = await axios.get(url);
    why.push(res.data.state.text);
}

export default test;