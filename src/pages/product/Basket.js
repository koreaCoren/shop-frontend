import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import loginCheck from 'utils/loginCheck';

import * as Style from "assets/styleComponent/product/basket"

import noImg from "assets/images/noImg.gif";

const Basket = ({ setOrderData }) => {
    const nav = useNavigate();
    const [basketData, setBasketData] = useState(JSON.parse(sessionStorage.getItem("basket")));
    const [checkData, setCheckData] = useState([]);
    const [reload, setReload] = useState(basketData === null ? 0 : basketData?.length);



    //전체 선택
    const allCheck = (checked) => {
        if (checked) {
            const arr = [];
            basketData.forEach(el => {
                arr.push(el.goods_code);
            });
            setCheckData(arr);
        } else {
            setCheckData([]);
        }
    }

    //선택상품 확인
    const singCheck = (checked, code) => {
        if (checked) {
            setCheckData(prev => [...prev, code]);
        } else {
            setCheckData(checkData.filter((el) => el !== code));
        }
    }

    // 장바구니 선택삭제
    const deleteBasket = () => {
        const arr = basketData;
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < checkData.length; j++) {
                if (checkData[j] === arr[i].goods_code) {
                    arr.splice(i, 1);
                }
            }
        }
        sessionStorage.setItem("basket", JSON.stringify(arr));
        setBasketData(arr);
        setReload(basketData.length);
    }

    // 장바구니 선택 구매
    const selectBasket = () => {
        const arr = [];
        for (let i = 0; i < basketData.length; i++) {
            for (let j = 0; j < checkData.length; j++) {
                if (checkData[j] === basketData[i].goods_code) {
                    arr.push(basketData[i]);
                }
            }
        }
        return arr;
    }

    //갯수 증가
    const countUp = (i) => {
        const data = JSON.parse(sessionStorage.getItem("basket"));
        data[i].prodcut_count += 1;
        sessionStorage.setItem("basket", JSON.stringify(data));
        setBasketData(JSON.parse(sessionStorage.getItem("basket")));
    }

    //갯수 감소
    const countDown = (i) => {
        const data = JSON.parse(sessionStorage.getItem("basket"));
        if (data[i].prodcut_count > 1) {
            data[i].prodcut_count -= 1;
        } else {
            data[i].prodcut_count = 1;
        }
        sessionStorage.setItem("basket", JSON.stringify(data));
        setBasketData(JSON.parse(sessionStorage.getItem("basket")));
    }

    //주문하기
    const basketOrder = () => {
        const selectData = selectBasket();
        let data = [];

        if (loginCheck(true) === true) {
            return;
        }

        if (selectData.length === 0) {
            alert("상품을 선택해주세요");
            return;
        }

        for (let i = 0; i < selectData.length; i++) {
            data.push(
                {
                    product_code: selectData[i].goods_code,
                    product_name: selectData[i].goods_nm,
                    product_img: selectData[i].goods_img,
                    price: selectData[i].goods_price,
                    sale: selectData[i].goods_sale,
                    prodcut_count: selectData[i].prodcut_count,
                    total_price: Math.ceil(selectData[i]?.goods_price - (selectData[i].goods_price * (selectData[i].goods_sale * 0.01))) * selectData[i].prodcut_count
                }
            )
        }

        setOrderData(data);
        nav("/order/info");
    }

    useEffect(() => { }, [reload]);

    return (
        <Style.Basket>
            <div className="wrap">
                <Style.Title>장바구니</Style.Title>
                <Style.Purchase>
                    <ul className='title'>
                        <li>
                            <input type="checkbox"
                                onChange={(e) => { allCheck(e.target.checked) }}
                                checked={checkData.length === basketData?.length ? true : false}
                            />
                        </li>
                        <li>상품정보</li>
                        <li>수량</li>
                        <li>할인율</li>
                        <li>상품금액 <br />(할인적용)</li>
                    </ul>
                    {
                        basketData === null || basketData?.length === 0
                            ? <p>현재 장바구니에 담긴 상품이 없습니다.</p>
                            : basketData.map((a, i) => {
                                return (
                                    <ul className="productInfo" key={i}>
                                        <li>
                                            <input type="checkbox"
                                                onChange={(e) => singCheck(e.target.checked, a.goods_code)}
                                                checked={checkData.includes(a.goods_code) ? true : false}
                                            />
                                        </li>
                                        <li>
                                            <img src={a.goods_img === "" ? noImg : a.goods_img} alt="" />
                                            <div className="content">
                                                <div className="title">{a.goods_nm}</div>
                                            </div>
                                        </li>
                                        <li className='count'>
                                            {a.prodcut_count > 1
                                                ?
                                                <button onClick={() => {
                                                    countDown(i);
                                                }}><span>-</span></button>
                                                : <span className='none'>-</span>
                                            }
                                            {a.prodcut_count}개
                                            <button onClick={() => {
                                                countUp(i);
                                            }}><span>+</span></button></li>
                                        <li>{a.goods_sale}%</li>
                                        <li>{Math.ceil((a.goods_price - (a.goods_price * (a.goods_sale * 0.01))) * a.prodcut_count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</li>
                                    </ul>
                                )
                            })
                    }
                </Style.Purchase>

                <Style.Button>
                    <button onClick={deleteBasket}>선택삭제</button>
                    <button onClick={basketOrder}>선택 구매하기</button>
                </Style.Button>
            </div>
        </Style.Basket>
    );
};

export default Basket;