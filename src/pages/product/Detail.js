import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import MainList from '../main/MainProductList';

const Detail = ({ result }) => {
    const { productCode } = useParams();
    const [productDetail, setProductDetail] = useState();
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
        <Padding>
            <div className="wrap">
                <Info>
                    <li>
                        <img src={productDetail?.goods_img} alt="" />
                    </li>
                    <li>
                        <h2>{productDetail?.goods_nm}</h2>
                        <h3>가격 {productDetail?.goods_price}원</h3>
                        <h3>할인률 {productDetail?.goods_sale}%</h3>
                        <div className="shipping">
                            <h4>배송정보</h4>
                            <p>몰?루</p>
                        </div>
                        <div className="payment">
                            <div className="flexbox">
                                <h4>총 결제금액</h4>
                                <div>{productDetail?.goods_price % productDetail?.goods_sale}원</div>
                            </div>
                            <div className="buttons">
                                <button>결제</button>
                                <button>장바구니</button>
                            </div>
                        </div>
                    </li>
                </Info>
                <div className="content">
                    <h2>상세내용</h2>
                    <p dangerouslySetInnerHTML={{ __html: productDetail?.goods_detail }}></p>
                </div>
            </div>
        </Padding>
    );
};

const Padding = styled.div`
    padding: 50px 0px;
`

const Info = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
    li > img{
        width: 100%;
        height: 575px;
        border-radius: 15px;
    }
    li .shipping{}
 `

export default Detail;