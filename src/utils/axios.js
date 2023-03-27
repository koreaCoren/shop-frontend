import * as API from "../api/apis";

//로그인
export const login = async (data) => {
    const api = await API.LOGIN_API.post("", data).then((res) => {
        if (res.data.loginCheck === "success") {
            sessionStorage.setItem("loginCheck", "success");
            sessionStorage.setItem("userId", res.data.userId);
            sessionStorage.setItem("token", res.data.token);
            return 'ok';
        } else {
            alert("아이디 또는 비밀번호가 틀렸습니다.");
            return 'fail';
        }
    }).catch((error) => {
        alert("서버와 통신 실패했습니다.\n" + error);
        window.location.replace("/");
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
        window.location.replace("/");
    })
    sessionStorage.removeItem("loginCheck");
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('token');
    window.location.replace("/");
}

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
        window.location.replace("/");
    });
    return api;
}

//토큰체크
export const tokenCheck = async () => {
    const data = {
        token: sessionStorage.getItem("token"),
        userId: sessionStorage.getItem("userId"),
    }
    const api = await API.TOKEN.post("", data).then((res) => {
        if (res.data.result !== "ok" && sessionStorage.getItem("token") !== null) {
            sessionStorage.removeItem("loginCheck");
            sessionStorage.removeItem('userId');
            sessionStorage.removeItem('token');
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
        window.location.replace("/");
    });
    return api;
}

// 접속자 집계
export const userCount = async (data) => {
    const api = await API.USER_COUNT.post("", data).then((res) => {

    }).catch((error) => {
        alert("서버와 통신 실패했습니다.\n" + error);
        window.location.replace("/");
    })
    return api;
}

//게시판 글쓰기
export const boardWrite = async (data) => {
    const api = await API.EDITOR_REGISTER.post("", data).then((res) => {
        console.log(res);
        if (res.data.result === "success") {
            alert("등록완료");
            if (data.type === "review") {
                window.location.replace(`/community/${data.type}/photo/1`);
            } else {
                window.location.replace(`/community/${data.type}/1`);
            }
        } else if (res.data.result === "fail") {
            alert("알 수 없는 에러로 등록실패 했습니다.");
        }
    }).catch((error) => {
        alert("서버와 통신 실패했습니다.\n" + error);
        window.location.replace("/");
    })
    return api;
}

// 게시글 출력
export const boardRead = async (data) => {
    const api = await API.READ_BOARD.post("", data).then((res) => {
        data.result = res.data;
    }).catch((error) => {
        alert("서버와 통신 실패했습니다.\n" + error);
        window.location.replace("/");
    });
    return api;
}

// 게시글 디테일
export const boardDetail = async (data) => {
    const api = await API.DETAIL_BOARD.post("", data).then((res) => {
        data.result = res.data;
    }).catch((error) => {
        alert("서버와 통신 실패했습니다.\n" + error);
        window.location.replace("/");
    });
    return api;
}

// 게시글 조회수 상승
export const boardView = async (data) => {
    const api = await API.VIEW_BOARD.post("", data).then((res) => {

    }).catch((error) => {
        alert("서버와 통신 실패했습니다.\n" + error);
        window.location.replace("/");
    });
    return api;
}

// 게시글 삭제
export const boardDelete = async (data) => {
    const api = await API.DELETE_BOARD.post("", data).then((res) => {
        alert("삭제되었습니다");
        window.location.replace(`/community/${data.type}/1`);
    }).catch((error) => {
        alert("서버와 통신 실패했습니다.\n" + error);
        window.location.replace("/");
    });
    return api;
}

// 구매한 상품 리스트 (리뷰용)
export const buyProductList = async (data) => {
    const api = await API.BUY_PRODUCT_LIST.post("", data).then((res) => {
        data.result = res.data
    }).catch((error) => {
        alert("서버와 통신 실패했습니다.\n" + error);
        window.location.replace("/");
    });
    return api;
}

// 메인 리뷰 리스트

export const main_review = async () => {
    const { data } = await API.MAIN_REVIEW.get();
    return data;
}


//--------- 어드민 관련 시작 ---------

//관리자용 대시보드
export const sel_dash = async () => {
    const { data } = await API.SEL_DASH.get();
    return data;
}


// 상품 판매 현황
export const sellByDateList = async () => {
    const { data } = await API.SELL_DATA_LIST_API.get();
    return data;
}

// 누적 판매 TOP5
export const accumulateSell = async () => {
    const { data } = await API.ACCUMULATE_SELL_DATA_API.get();
    return data;
}

// 방문자수
export const userAccessCount = async () => {
    const { data } = await API.USER_ACCESS_COUNT.get();
    return data;
}

// 유저 리스트
// export const user = async () => {
//     const { data } = await API.USER.get();
//     return data;
// }
export const user = async (data) => {
    const api = await API.USER.post("", data).then((res) => {
        data.result = res.data;
    }).catch((error) => {
        alert("서버와 통신 실패했습니다.\n" + error);
        window.location.replace("/");
    });
    return api;
}

// 유저 리스트 삭제
export const userDeleted = async (data) => {
    const api = await API.USER_DELETE.post("", data).then((res) => {
        if (res.data === "success") {
            alert("삭제완료");
            window.location.reload();
        } else {
            alert("알수없는 이유로 에러발생");
        }
    }).catch((error) => {
        alert("서버와 통신 실패했습니다.\n" + error);
        window.location.replace("/");
    });
    return api;
}

// 어드민 상품리스트
export const productList = async () => {
    const { data } = await API.PRODUCT_LIST_API.get();
    return data;
}

// 어드민 상품 등록
export const productRegister = async (data) => {
    const api = await API.EDITOR_REGISTER.post("", data).then((res) => {
        if (res.data.result === "success") {
            alert("등록완료");
            window.location.replace("/admin/product");
        } else if (res.data.result === "fail") {
            alert("알 수 없는 에러로 등록실패 했습니다.");
        }
    }).catch((error) => {
        alert("서버와 통신 실패했습니다.\n" + error);
        window.location.replace("/");
    })
    return api;
}

// 어드민 상품 수정
export const productEditor = async (data) => {
    const api = await API.PRODUCT_EDIT_API.post("", data).then((res) => {
        alert("수정완료");
        window.location.replace("/admin/product");
    }).catch((error) => { alert("서버와 통신을 실패했습니다.") })
    return api;
}

// 어드민 상품삭제
export const productDelete = async (data) => {
    const api = await API.PRODUCT_DELETE_API.post("", data).then((res) => {
    }).catch((error) => {
        alert("서버와 통신 실패했습니다.\n" + error);
        window.location.replace("/");
    })
    return api;
}

// 어드민 상품 디테일 불러오기
export const reqGoodsData = async (data) => {
    const api = await API.PRODUCT_SEL_API.post("", data).then((res) => {
        data.result = res.data.result;
    }).catch((error) => {
        alert("서버와 통신 실패했습니다.\n" + error);
        window.location.replace("/");
    })
    return api;
}

// 어드민 카테고리 리스트
export const categoryList = async () => {
    const { data } = await API.CATEGORY_LIST_API.get();
    return data;
}

// 어드민 카테고리 저장
export const categorySave = async (data) => {
    const api = await API.CATEGORY_SAVE_API.post("", data).then(() => {

    }).catch((error) => {
        alert("서버와 통신 실패했습니다.\n" + error);
        window.location.replace("/");
    })
    return api;
}

// 어드민 주문 관리
export const orderManagement = async (data) => {
    const api = await API.ORDER_MANAGEMENT.post("", data).then((res) => {
        data.result = res.data;
    }).catch((error) => {
        alert("서버와 통신이 실패했습니다.\n" + error);
        window.location.replace("/");
    })
    return api;
}

// 어드민 주문관리 디테일
export const orderManagementDetail = async (data) => {
    const api = await API.ORDER_MANAGEMENT_DETAIL.post("", data).then((res) => {
        data.detail = res.data;
    }).catch((error) => {
        alert("서버와 통신이 실패했습니다.\n" + error);
        window.location.replace("/");
    })
    return api;
}

// 어드민 주문관리 송장번호 수정
export const updateInvoice = async (data) => {
    const api = await API.UPDATE_INVOICE_CODE.post("", data).then((res) => {
        data.result = res.data;
        alert("송장번호 수정이 완료되었습니다.");
    }).catch((error) => {
        alert("서버와 통신이 실패했습니다.\n" + error);
        window.location.replace("/");
    })
    return api;
}


// 기본 배송지 설정
export const defaultDeliveryUpdate = async (data) => {
    const api = await API.DEFAULT_DELIVERY.post("", data).then((res) => {

    }).catch((error) => {
        alert("서버와 통신이 실패했습니다.\n" + error);
        window.location.replace("/");
    })
    return api;
}

// 송장입력
export const deliveryInput = async (data) => {
    const api = await API.DELIVERY_INPUT.post("", data).then((res) => {
        res.data.result === "Success" ? alert("저장완료") : alert(res.data.result)
        window.location.reload();
    }).catch((error) => {
        alert("서버와 통신이 실패했습니다.\n" + error);
        window.location.replace("/");
    })
    return api;
}

// 설정된 기본 배송지 
export const defaultSelect = async () => {
    const { data } = await API.DEFAULT_SELECT.get();
    return data;
}

// 송장 미입력 리스트 
export const nullInvoice = async () => {
    const { data } = await API.NULL_INVOICE.get();
    return data;
}

// 송장번호 업데이트(미완)
export const deliveryUpdate = async (data) => {
    const api = await API.DELIVERY_INPUT.post("", data).then((res) => {

    }).catch((error) => {
        alert("서버와 통신이 실패했습니다.\n" + error);
        window.location.replace("/");
    })
    return api;
}

// 배송사 업데이트
export const carrierUpdate = async (data) => {
    const api = await API.CARRIER_UPDATE.post("", data).then((res) => {

    }).catch((error) => {
        alert("서버와 통신이 실패했습니다.\n" + error);
        window.location.replace("/");
    })
    return api;
}

//--------- 어드민 관련 끝 ---------

// -------- 주문 시작 --------------

// 유저 주문전체 그룹화하여 확인
export const orderList = async (data) => {
    const api = await API.ORDER_LIST.post("", data).then((res) => {
        data.result = [...res.data];
    }).catch((error) => {
        alert("서버와 통신 실패했습니다.\n" + error);
        window.location.replace("/");
    })
    return api;
}

// 주문번호로 주문확인
export const orderCodeList = async (data) => {
    const api = await API.ORDER_CODE_LIST.post("", data).then((res) => {
        data.result = [...res.data];
    }).catch((error) => {
        alert("서버와 통신 실패했습니다.\n" + error);
        window.location.replace("/");
    })
    return api;
}

// 주문하기
export const order = async (data) => {
    const api = await API.ORDER.post("", data).then((res) => {

    }).catch((error) => {
        alert("서버와 통신 실패했습니다.\n" + error);
        window.location.replace("/");
    })
    return api;
}

// 결제완료
export const orderSuccess = async (data) => {
    const api = await API.ORDER_SUCCESS.post("", data).then((res) => {
        if (String(res.data[0].resultCode) === "0000") {
            data.result = { ...res.data[0] };
        } else {
            alert("알수없는 에러로 실패하였습니다. \n관리자에게 문의 부탁드립니다.");
            window.location.replace("/");
        }
    }).catch((error) => {
        alert("서버와 통신 실패했습니다.\n" + error);
        window.location.replace("/");
    })
    return api;
}

//유저 기본 배송지 불러오기
export const addressList = async (data) => {
    const api = await API.ADDRESS_LIST.post("", data).then((res) => {
        data.result = res.data;
    }).catch((error) => {
        alert("서버와 통신을 실패했습니다.\n" + error);
        window.location.replace("/");
    })
    return api;
}

// -------- 주문 끝 --------------

// -------- 개인정보 시작 ------------

// 주문하기, 배송지 불러오기
export const address = async (data) => {
    const api = await API.USER_ADDRESS.post("", data).then((res) => {
        data.result = res.data;
    }).catch((error) => {
        alert("서버와 통신 실패했습니다.\n" + error);
        window.location.replace("/");
    })
    return api;
}

// 개인정보 읽기
export const info = async (data) => {
    const api = await API.USER_INFO.post("", data).then((res) => {
        data.result = res.data[0];
    }).catch((error) => {
        alert("서버와 통신 실패했습니다.\n" + error);
        window.location.replace("/");
    })
    return api;
}

// 개인정보 수정
export const userUpdate = async (data) => {
    const api = await API.USER_UPDATE.post("", data).then((res) => {
        if (res.data.result[0] === 'fail') {
            alert("비밀번호가 틀렸습니다.");
            window.location.replace("/myPage/info");
        } else {
            alert("수정이 완료되었습니다.");
            window.location.replace("/myPage/info");
        }

    }).catch((error) => {
        alert("서버와 통신 실패했습니다.\n" + error);
        window.location.replace("/");
    })
    return api;
}

//신규배송지 추가
export const insertAddress = async (data) => {
    const api = await API.ADD_ADDRESS.post("", data).then((res) => {
        data.result = res.data;
        alert("신규배송지가 추가되었습니다.");
        window.location.replace("/myPage/address");
    }).catch((error) => {
        alert("서버와 통신 실패했습니다.\n" + error);
        window.location.replace("/");
    })
    return api;
}

//배송지 삭제
export const deleteAddress = async (data) => {
    const api = await API.DELETE_ADDRESS.post("", data).then((res) => {
        data.result = res.data;
        alert("배송지가 삭제되었습니다.");
        window.location.replace("/myPage/address");
    }).catch((error) => {
        alert("서버와 통신 실패했습니다.\n" + error);
        window.location.replace("/");
    })
    return api;
}

//기본 배송지로 설정
export const insDefaultAddr = async (data) => {
    const api = await API.SET_DEFAULT_ADDR.post("", data).then((res) => {
        data.result = res.data;
        alert("기본 배송지로 설정되었습니다.");
        window.location.replace("/myPage/address");
    }).catch((error) => {
        alert("서버와 통신을 실패했습니다.\n" + error);
        window.location.replace("/");
    })
    return api;
}

//찜한 상품
export const reqPickList = async (data) => {
    const api = await API.REQ_PICK_LIST.post("", data).then((res) => {
        data.result = res.data;
    }).catch((error) => {
        alert("서버와 통신을 실패했습니다.\n" + error);
        window.location.replace("/");
    })
    return api;
}

//좋아요 보여줌
export const getFavList = async (data) => {
    const api = await API.GET_FAV_LIST.post("", data).then((res) => {
        data.result = res.data;
    }).catch((error) => {
        alert("서버와 통신을 실패했습니다.\n" + error);
        window.location.replace("/");
    })
    return api;
}

//상품 좋아요
export const settingFav = async (data) => {
    const api = await API.SET_FAV.post("", data).then((res) => {
        data.result = res.data;
    }).catch((error) => {
        alert("서버와 통신을 실패했습니다.\n" + error);
        window.location.replace("/");
    })
    return api;
}


// -------- 개인정보 끝 --------------

// -------- 상품 관련 ---------------


