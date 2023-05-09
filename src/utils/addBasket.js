// 장바구니 추가
// const addBasket = (product, count) => {
//     let arr = product;
//     if (sessionStorage.getItem("basket") !== null) {
//         arr.prodcut_count = count;
//         let getBasket = JSON.parse(sessionStorage.getItem("basket"));
//         for (let i = 0; i < getBasket.length; i++) {
//             if (getBasket[i].goods_code === product.goods_code) {
//                 alert("이미 장바구니에 등록되있는 상품입니다.");
//                 return;
//             }
//         }
//         getBasket.push(product);
//         sessionStorage.setItem("basket", JSON.stringify(getBasket));
//         alert("장바구니에 등록되었습니다.");
//     } else {
//         arr.prodcut_count = count;
//         sessionStorage.setItem("basket", JSON.stringify([product]));
//         alert("장바구니에 등록되었습니다.");
//     }
// }

const addBasket = (productCode) => {
    if (sessionStorage.getItem("basket") !== null) {
        let getBasket = JSON.parse(sessionStorage.getItem("basket"));
        for (let i = 0; i < getBasket.length; i++) {
            if (getBasket[i] === productCode) {
                alert("이미 장바구니에 등록되있는 상품입니다.");
                return;
            }
        }
        getBasket.push(productCode);
        sessionStorage.setItem("basket", JSON.stringify(getBasket));
        alert("장바구니에 등록되었습니다.");
    } else {
        sessionStorage.setItem("basket", JSON.stringify([productCode]));
        alert("장바구니에 등록되었습니다.");
    }
}

export default addBasket;