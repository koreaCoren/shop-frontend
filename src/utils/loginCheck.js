//로그인체크
const loginCheck = () => {
    if (sessionStorage.getItem("userId") === null ||
        sessionStorage.getItem("token") === null ||
        sessionStorage.getItem("loginCheck") === null) {
        alert("로그인 후 이용가능합니다.");
        return true;
    }
}

export default loginCheck;