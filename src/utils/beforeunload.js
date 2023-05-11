const preventClose = (e) => {
    e.preventDefault();
    e.returnValue = ""; // 브라우저 종료를 막기 위해 빈 문자열을 반환
};

export const beforeunload = () => {
    window.addEventListener("beforeunload", preventClose);

    return () => {
        window.removeEventListener("beforeunload", preventClose);
    };
};