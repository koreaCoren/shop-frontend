import axios from "axios";

// 배송상황 리턴
const track = async (carrier, delivery, trackResult) => {
    const url = `https://apis.tracker.delivery/carriers/${carrier}/tracks/${delivery}`;
    const res = await axios.get(url);
    trackResult.push(res.data.state.text);
}

export default track;