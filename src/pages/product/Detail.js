import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import Loading from 'components/loding/Loading';
import loginCheck from 'utils/loginCheck';

import userTest from 'assets/images/userTest.png';

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
        setOrderData([data]);
        nav("/order/info");
    }

    // 장바구니 추가
    const addBasket = () => {
        let arr = productDetail;
        if (sessionStorage.getItem("basket") !== null) {
            arr.prodcut_count = count;
            let getBasket = JSON.parse(sessionStorage.getItem("basket"));
            for (let i = 0; i < getBasket.length; i++) {
                if (getBasket[i].goods_code === productDetail.goods_code) {
                    alert("이미 장바구니에 등록되있는 상품입니다.");
                    return;
                }
            }
            getBasket.push(productDetail);
            sessionStorage.setItem("basket", JSON.stringify(getBasket));
            alert("장바구니에 등록되었습니다.");
        } else {
            arr.prodcut_count = count;
            sessionStorage.setItem("basket", JSON.stringify([productDetail]));
            alert("장바구니에 등록되었습니다.");
        }
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
                                <Style.Button onClick={addBasket}>장바구니 담기</Style.Button>
                                {/* <Style.Button>관련상품</Style.Button> */}
                            </Style.ButtonBox>
                        </div>
                    </Style.Content>
                </Style.Info>

                <Style.Description>
                    <Style.DescriptionMenu>
                        {/* <ul>
                                <li className='lightOn'><span>상품설명</span></li>
                                <li className=''><span>상품후기</span></li>
                                <li className=''><span>상품문의</span></li>
                                <li className=''><span>교환/반품</span></li>
                            </ul> */}
                        <ul>
                            <li>상세정보</li>
                            <li>교환/반품</li>
                        </ul>
                    </Style.DescriptionMenu>
                    <Style.OrderMenu>
                        <div></div>
                    </Style.OrderMenu>
                    <Style.DescriptionShow>
                        <div dangerouslySetInnerHTML={{ __html: productDetail?.goods_detail }}></div>
                    </Style.DescriptionShow>
                    {/* <Style.Review>
                        <h2>상품 후기</h2>
                        <div className='grid'>
                            <div className='userId'>PKD</div>
                            <div className='reviewDetail'>
                                <p className='optionList'>노르웨이숲 + 캣타워</p>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae labore, quaerat illo quis suscipit vel quos nesciunt rerum voluptatem iste dolorem placeat nihil atque ipsum corrupti, autem quo nulla? Totam?
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti magnam recusandae nulla officia eveniet cumque quidem exercitationem, rerum nostrum, culpa sed veniam impedit pariatur aperiam sapiente, laboriosam molestiae nesciunt. Libero!
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum ipsum praesentium placeat fuga repellendus, atque ab est optio adipisci ullam eligendi unde hic magni dolore neque numquam perferendis voluptate odio?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae magni ipsa atque repellendus ut omnis non debitis vitae. Beatae pariatur, aut illum asperiores nostrum quas veritatis id ea quaerat maxime!
                                </p>
                                <p>2023-02-01</p>
                            </div>
                        </div>
                        <div className='grid'>
                            <div className='userId'>Admin</div>
                            <div className='reviewDetail'>
                                <p className='optionList'>옵션명</p>
                                <p>애용애용애요오옹애용애요오옹애용</p>
                                <p>2023-01-29</p>
                            </div>
                        </div>
                    </Style.Review> */}
                    {/* <Style.QnA>
                        <h2>상품 문의</h2>
                        <span>배송관련, 주문(취소/교환/환불/관련) 문의 및 요청사항은 마이페이지 1:1문의에 남겨주세요.</span>
                        <table className='QnATable'>
                            <thead>
                                <tr>
                                    <th className='title bold'>제     목</th>
                                    <th className='user bold'>작 성 자</th>
                                    <th className='date bold'>작 성 일</th>
                                    <th className='QnA bold'>답변상태</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td onClick={() => {alert("애요옹~~??");}}>애용</td>
                                    <td className='user'>asd</td>
                                    <td className='date'>2023.02.01</td>
                                    <td className='QnA'>답변완료</td>
                                </tr>
                                <tr>
                                    <td onClick={() => {alert("애옹~~??");}}>재입고</td>
                                    <td className='user'>PKD</td>
                                    <td className='date'>2023.02.01</td>
                                    <td className='QnA'>-</td>
                                </tr>
                                <tr>
                                    <td onClick={() => {alert("애~~~~요옹??");}}>고영희씨</td>
                                    <td className='user'>PKD</td>
                                    <td className='date'>2023.01.23</td>
                                    <td className='QnA'>답변완료</td>
                                </tr>
                                <tr>
                                    <td onClick={() => {
                                        alert("애옹!!!");
                                        }}>안녕?</td>
                                    <td className='user'>PKD</td>
                                    <td className='date'>2023.01.31</td>
                                    <td className='QnA'>-</td>
                                </tr>
                            </tbody>
                        </table>
                    </Style.QnA> */}
                </Style.Description>
            </div>

            {result.isLoading && <Loading />}
        </Style.Padding >
    );
};

export default Detail;