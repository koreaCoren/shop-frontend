import { loginApi, token } from "./apis";
// 로그인
export const login = async (data) => {
    const api = await loginApi.post("", data).then((res) => {
        if (res.data.loginCheck === "success") {
            sessionStorage.setItem("loginCheck", "success");
            sessionStorage.setItem("userId", res.data.userId);
            sessionStorage.setItem("loginToken", res.data.token);
        } else {
            alert("아이디 또는 비밀번호 틀립니다.");
        }
    }).catch((error) => {
        console.log(error);
    })
    return api;
}

//회원가입
export const register = async (data) => {
    const api = await loginApi.post("", data).then((res) => {
        if (res.data.id === false) {
            alert("중복된 아이디입니다.");
            return;
        } else if (res.data.email === false) {
            alert("중복된 이메일입니다.");
            return;
        } else {
            alert("회원가입 완료되었습니다.");
        }
    }).catch((error) => {
        console.log(error);
    });
    return api;
}

//토큰체크
export const tokenCheck = async (data) => {
    const api = await token.post("", data).then((res) => {
        if (res.data.result !== "ok") {
            sessionStorage.removeItem("loginCheck");
            sessionStorage.removeItem('userId');
            sessionStorage.removeItem('loginToken');
            alert("토큰 만료됬어 돌아가렴");
        }
    }).catch((error) => {
        console.log(error);
    });
    return api
}