import React from 'react';

import * as Style from "assets/styleComponent/product/basket"
import { useState } from 'react';

const Basket = ({ setOrderData }) => {
    const [basketData, setBasketData] = useState(JSON.parse(sessionStorage.getItem("basket")));
    return (
        <Style.Basket>
            <div className="wrap">
                <Style.Title>장바구니</Style.Title>
                {
                    basketData.map((a, i) => {
                        return (
                            <Style.Purchase key={i}>
                                <ul className='title'>
                                    <li>상품정보</li>
                                    <li>배송비 <br />(5만원이상 무료)</li>
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
                                    <li>{a.goods_price}원</li>
                                    <li>{a.prodcut_count}개</li>
                                    <li>{a.goods_sale}%</li>
                                    <li>{Math.ceil(a.goods_price - (a.goods_price * (a.goods_sale * 0.01))) * a.prodcut_count}원</li>
                                </ul>
                            </Style.Purchase>
                        )
                    })
                }
            </div>
        </Style.Basket>
    );
};

export default Basket;