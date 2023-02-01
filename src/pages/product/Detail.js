import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import Loading from 'components/loding/Loading';
import loginCheck from 'utils/loginCheck';

import * as Style from "assets/styleComponent/product/detail"

const Detail = ({ result, setOrderData }) => {
    const nav = useNavigate();
    const { productCode } = useParams();
    const [productDetail, setProductDetail] = useState();
    const [count, setCount] = useState(1);
    const [deliveryPay, setDeliveryPay] = useState(2500);
    const [lightOn, setLightOn] = useState();

    //해당 페이지 상품 디테일 가져오기
    useEffect(() => {
        if (result.isLoading === false) {
            for (let i = 0; i < result.data.length; i++) {
                if (result.data[i].goods_code === productCode) {
                    setProductDetail(result.data[i]);
                };
            };
        };
    }, [result.isLoading]);

    //상품갯수증가
    const countUp = () => {
        setCount(count + 1);
    }

    //상품갯수감소
    const countDown = () => {
        if (count <= 1) {
            alert("1보다 작을수는 없습니다.");
            return;
        }
        setCount(count - 1);
    }

    //구매 클릭
    const orderClick = () => {
        if (loginCheck() === true) {
            return;
        }
        const data = {
            product_code: productCode,
            product_name: productDetail?.goods_nm,
            product_img: productDetail?.goods_img,
            deliveryPay: deliveryPay,
            price: productDetail?.goods_price,
            sale: productDetail?.goods_sale,
            prodcut_count: count,
            total_price: Math.ceil(productDetail?.goods_price - (productDetail?.goods_price * (productDetail?.goods_sale * 0.01))) * count
        }
        setOrderData(data);
        nav("/order/info");
    }

    return (
        <Style.Padding>
            <div className="wrap">
                <Style.Info>
                    <Style.ImageInfo>
                        <img src={productDetail?.goods_img} alt="" />
                        {/* 확대보기 버튼
                        <button>
                            <i className="fa-solid fa-magnifying-glass"></i>
                            확대보기
                        </button>
                        */}
                    </Style.ImageInfo>
                    <Style.Content>
                        <h2>{productDetail?.goods_nm}</h2>
                        <div className="info">
                            <Style.DetailInfo>
                                <li><b>판매가</b><span className="pay">{productDetail?.goods_price}원</span></li>
                                <li><b>할인률</b><span>{productDetail?.goods_sale}%</span></li>
                                <li><b>국내해외배송</b><span>국내배송</span></li>
                                <li><b>배송방법</b><span>택배</span></li>
                                <li><b>배송비</b><span>{deliveryPay} (50,000 이상 구매시 무료)</span></li>
                            </Style.DetailInfo>
                            <p>(최소주문수량 1개 이상)</p>
                            <Style.Quantity>
                                <div className="name">{productDetail?.goods_nm}</div>
                                <div className="num">
                                    <i className="fa-solid fa-caret-up" onClick={countUp}></i>
                                    <span>{count}</span>
                                    <i className="fa-solid fa-caret-down" onClick={countDown}></i>
                                </div>
                                <div className="money">{Math.ceil(productDetail?.goods_price - (productDetail?.goods_price * (productDetail?.goods_sale * 0.01)))}원</div>
                            </Style.Quantity>
                            <Style.Total>
                                <span><b>총 상품가격</b></span>
                                <b>{Math.ceil(productDetail?.goods_price - (productDetail?.goods_price * (productDetail?.goods_sale * 0.01))) * count}원</b>
                            </Style.Total>
                            <Style.ButtonBox>
                                <Style.Button onClick={orderClick} color={"black"} to={`/order/info`}>바로구매하기</Style.Button>
                                {/* <Style.Button>장바구니</Style.Button>
                                <Style.Button>관련상품</Style.Button> */}
                            </Style.ButtonBox>
                        </div>
                    </Style.Content>
                </Style.Info>

                <Style.Description>
                    <Style.DescriptionMenu>
                        <ul>
                            <li className='lightOn'><a href="#">상품설명</a></li>
                            <li className=''><a href="#">상세설명</a></li>
                            <li className=''><a href="#">후기</a></li>
                            <li className=''><a href="#">문의</a></li>
                        </ul>
                    </Style.DescriptionMenu>
                    <Style.OrderMenu>
                        <div></div>
                    </Style.OrderMenu>
                    <Style.DescriptionShow>
                            <div dangerouslySetInnerHTML={{__html: productDetail?.goods_detail}}></div>
                    </Style.DescriptionShow>
                    <Style.Review>
                        <div>
                            <h2>상품후기</h2>
                            <div className='flex'>
                                <div>아이디</div>
                                <div><p>후기내용</p></div>
                            </div>
                        </div>
                    </Style.Review>
                    <Style.QnA></Style.QnA>
                </Style.Description>
            </div>

            {result.isLoading && <Loading />}
        </Style.Padding>
    );
};

export default Detail;