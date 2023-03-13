const adminCheck = () => {
    if (sessionStorage.getItem("userId") !== "admin" &&
        sessionStorage.getItem("userId") !== "asd" &&
        sessionStorage.getItem("userId") !== "pkd") {
        alert("접근불가능합니다.");
        return false;
    }
}

export default adminCheck;