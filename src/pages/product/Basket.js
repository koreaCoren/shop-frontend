import React from 'react';

import * as Style from "assets/styleComponent/product/basket"
import { useState } from 'react';
import loginCheck from 'utils/loginCheck';
import { useNavigate } from 'react-router-dom';

const Basket = ({ setOrderData }) => {
    const nav = useNavigate();
    const [basketData, setBasketData] = useState(JSON.parse(sessionStorage.getItem("basket")));
    const basketOrder = () => {
        if (loginCheck() === true) {
            return;
        }
        let data = [];
        for (let i = 0; i < basketData.length; i++) {
            data.push(
                {
                    product_code: basketData[i].goods_code,
                    product_name: basketData[i].goods_nm,
                    product_img: basketData[i].goods_img,
                    price: basketData[i].goods_price,
                    sale: basketData[i].goods_sale,
                    prodcut_count: basketData[i].prodcut_count,
                    total_price: Math.ceil(basketData[i]?.goods_price - (basketData[i].goods_price * (basketData[i].goods_sale * 0.01))) * basketData[i].prodcut_count
                }
            )
        }
        setOrderData(data);
        nav("/order/info");
    }
    return (
        <Style.Basket>
            <div className="wrap">
                <Style.Title>장바구니</Style.Title>
                {
                    basketData === null
                        ? <Style.Purchase>
                            <ul className='title'>
                                <li>상품정보</li>
                                <li>수량</li>
                                <li>할인율</li>
                                <li>상품금액 <br />(할인적용)</li>
                            </ul>
                            <p>현재 장바구니에 담긴 상품이 없습니다.</p>
                        </Style.Purchase>
                        : basketData.map((a, i) => {
                            return (
                                <Style.Purchase key={i}>
                                    <ul className='title'>
                                        <li>상품정보</li>
                                        <li>수량</li>
                                        <li>할인율</li>
                                        <li>상품금액 <br />(할인적용)</li>
                                    </ul>
                                    <ul className="productInfo">
                                        <li>
                                            <img src={a.goods_img} alt="" />
                                            <div className="content">
                                                <div className="title">{a.goods_nm}</div>
                                            </div>
                                        </li>
                                        <li>{a.prodcut_count}개</li>
                                        <li>{a.goods_sale}%</li>
                                        <li>{Math.ceil(a.goods_price - (a.goods_price * (a.goods_sale * 0.01))) * a.prodcut_count}원</li>
                                    </ul>
                                </Style.Purchase>
                            )
                        })
                }

                <Style.Button onClick={basketOrder}>
                    <button>구매하기</button>
                </Style.Button>
            </div>
        </Style.Basket>
    );
};

export default Basket;