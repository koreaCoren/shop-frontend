// 장바구니 추가
const addBasket = (product, count) => {
    let arr = product;
    if (sessionStorage.getItem("basket") !== null) {
        arr.prodcut_count = count;
        let getBasket = JSON.parse(sessionStorage.getItem("basket"));
        getBasket.push(product);
        sessionStorage.setItem("basket", JSON.stringify(getBasket));
        alert("장바구니에 등록되었습니다.");
    } else {
        arr.prodcut_count = count;
        sessionStorage.setItem("basket", JSON.stringify([product]));
        alert("장바구니에 등록되었습니다.");
    }
}

export default addBasket;