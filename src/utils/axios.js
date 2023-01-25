import * as API from "../api/apis";

//로그인
export const login = async (data) => {
    const api = await API.LOGIN_API.post("", data).then((res) => {
        if (res.data.loginCheck === "success") {
            sessionStorage.setItem("loginCheck", "success");
            sessionStorage.setItem("userId", res.data.userId);
            sessionStorage.setItem("token", res.data.token);
        } else {
            alert("아이디 또는 비밀번호 틀립니다.");
        }
    }).catch((error) => {
        alert("서버와 통신 실패했습니다.\n" + error);
    })
    return api;
}

//로그아웃
export const logout = async () => {
    const userId = sessionStorage.getItem('userId');
    const data = {
        userId: userId
    }

    await API.LOGOUT_API.post("", data).then((res) => {

    }).catch((error) => {
        alert("서버와 통신 실패했습니다.\n" + error);
    })

    sessionStorage.removeItem("loginCheck");
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('token');
    window.location.replace("/");
};

//회원가입
export const register = async (data) => {
    const api = await API.REGISTER_API.post("", data).then((res) => {
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
        alert("서버와 통신 실패했습니다.\n" + error);
    });
    return api;
}

//토큰체크
export const tokenCheck = async (data) => {
    const api = await API.TOKEN.post("", data).then(async (res) => {
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
        alert("서버와 통신 실패했습니다.\n" + error);
    });
    return api
}

//상품리스트
export const productList = async () => {
    const { data } = await API.PRODUCT_LIST_API.get();
    return data;
}

//상품 등록
export const productRegister = async (data) => {
    const api = await API.PRODUCT_REGISTER_API.post("", data).then((res) => {
        if (res.data.result === "success") {
            alert("등록완료");
            window.location.replace("/admin/product");
        } else if (res.data.result === "fail") {
            alert("알 수 없는 에러로 등록실패 했습니다.");
        }
    }).catch((error) => {
        alert("서버와 통신 실패했습니다.\n" + error);
    })
    return api
}

//상품삭제
export const productDelete = async (data) => {
    const api = await API.PRODUCT_DELETE_API.post("", data).then((res) => {
    }).catch((error) => {
        alert("서버와 통신 실패했습니다.\n" + error);
    })
    return api
}

// 카테고리 리스트
export const categoryList = async () => {
    const { data } = await API.CATEGORY_LIST_API.get();
    return data;
}

// 카테고리 저장
export const categorySave = async (data) => {
    const api = await API.CATEGORY_SAVE_API.post("", data).then(() => {

    }).catch((error) => {
        alert("서버와 통신 실패했습니다.\n" + error);
    })
    return api
}

// 주문하기
export const order = async (data) => {
    const api = await API.ORDER.post("", data).then(() => {

    }).catch((error) => {
        alert("서버와 통신 실패했습니다.\n" + error);
    })
}