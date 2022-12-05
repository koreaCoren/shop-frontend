import { loginApi, logoutApi, registerApi, token, prodcutListApi, prodcutRegisterApi } from "./apis";

//로그인
export const login = async (data) => {
    const api = await loginApi.post("", data).then((res) => {
        if (res.data.loginCheck === "success") {
            sessionStorage.setItem("loginCheck", "success");
            sessionStorage.setItem("userId", res.data.userId);
            sessionStorage.setItem("token", res.data.token);
        } else {
            alert("아이디 또는 비밀번호 틀립니다.");
        }
    }).catch((error) => {
        console.log(error);
    })
    return api;
}

//로그아웃
export const logout = async () => {
    const userId = sessionStorage.getItem('userId');
    const data = {
        userId: userId
    }

    await logoutApi.post("", data).then((res) => {

    }).catch((error) => {
        console.log(error);
    })

    sessionStorage.removeItem("loginCheck");
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('token');
    window.location.replace("/");
};

//회원가입
export const register = async (data) => {
    const api = await registerApi.post("", data).then((res) => {
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
    const api = await token.post("", data).then(async (res) => {
        if (res.data.result !== "ok" && sessionStorage.getItem("token") !== null) {
            sessionStorage.removeItem("loginCheck");
            sessionStorage.removeItem('userId');
            sessionStorage.removeItem('token');
            alert("토큰만료되서 로그아웃됨");
        }
        if (sessionStorage.getItem("token") === null ||
            sessionStorage.getItem("loginCheck") === null ||
            sessionStorage.getItem("userId") === null) {
            sessionStorage.removeItem("loginCheck");
            sessionStorage.removeItem('userId');
            sessionStorage.removeItem('token');
        }
    }).catch((error) => {
        console.log(error);
    });
    return api
}

//상품리스트
export const productList = async () => {
    const { data } = await prodcutListApi.get();
    return data;
}

//상품 등록
export const productRegister = async (data) => {
    const api = await prodcutRegisterApi.post("", data).then((res) => {

    }).catch((error) => {
        console.log(error);
    })
    return api
}