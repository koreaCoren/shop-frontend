import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import MainList from '../main/MainProductList';
import * as Style from "assets/styleComponent/product/detail"

const Detail = ({ result }) => {
    const { productCode } = useParams();
    const [productDetail, setProductDetail] = useState();

    //해당 페이지 상품 디테일 가져오기
    useEffect(() => {
        console.log(result);
        if (result.isLoading === false) {
            for (let i = 0; i < result.data.length; i++) {
                if (result.data[i].goods_code === productCode) {
                    setProductDetail(result.data[i]);
                }
            }
        }
    }, [result.isLoading])
    return (
        <Style.Padding>
            <div className="wrap">
                <Style.Info>
                    <div className="imageInfo">
                        <img src={productDetail?.goods_img} alt="" />
                        <button>
                            <i className="fa-solid fa-magnifying-glass"></i>
                            확대보기
                        </button>
                    </div>
                    <div className="content">
                        <h2>{productDetail?.goods_nm}</h2>
                        <div className="info">
                            <ul>
                                <li><b>판매가</b><span className="pay">{productDetail?.goods_price}원</span></li>
                                <li><b>할인률</b><span>{productDetail?.goods_sale}%</span></li>
                                <li><b>국내해외배송</b><span>국내배송</span></li>
                                <li><b>배송방법</b><span>택배</span></li>
                                <li><b>배송비</b><span>2,500 (50,000 이상 구매시 무료)</span></li>
                            </ul>
                            <p>(최소주문수량 1개 이상)</p>
                            <div className="quantity">
                                <div className="name">{productDetail?.goods_nm}</div>
                                <div className="num">1</div>
                                <div className="money">{productDetail?.goods_price}원</div>
                            </div>
                            <div className="total">
                                <span><b>총 상품수량</b></span>
                                <b>{productDetail?.goods_price - (productDetail?.goods_price * (productDetail?.goods_sale * 0.01))}원</b>
                            </div>
                            <div className="button">
                                <a href="#" className="black">바로구매하기</a>
                                <a href="#">장바구니</a>
                                <a href="#">관련상품</a>
                            </div>
                        </div>
                    </div>
                </Style.Info>
            </div>
        </Style.Padding>
    );
};

export default Detail;