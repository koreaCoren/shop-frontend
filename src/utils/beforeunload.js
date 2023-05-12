// 새로고침시 재확인
const preventClose = (e) => {
    e.preventDefault();
    e.returnValue = "";
};

export const beforeunload = () => {
    window.addEventListener("beforeunload", preventClose);

    return () => {
        window.removeEventListener("beforeunload", preventClose);
    };
};