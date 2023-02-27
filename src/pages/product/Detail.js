import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {settingFav, getFavList} from 'utils/axios';

import Loading from 'components/loding/Loading';
import loginCheck from 'utils/loginCheck';

import * as Style from "assets/styleComponent/product/detail"
import addBasket from 'utils/addBasket';

const Detail = ({ result, setOrderData }) => {
    const nav = useNavigate();
    const { productCode } = useParams();
    const [productDetail, setProductDetail] = useState();
    const [count, setCount] = useState(1);
    const [deliveryPay, setDeliveryPay] = useState(2500);
    const [lightOn, setLightOn] = useState();
    const [fav, setFav] = useState(0);

    const DescriptionRef = useRef();
    const returnRef = useRef();


    const favControll = useMutation(settingFav);
    const favList = useMutation(getFavList);

    //해당 페이지 상품 디테일 가져오기
    useEffect(() => {
        selFav();
        if (result.isLoading === false) {
            for (let i = 0; i < result.data.length; i++) {
                if (result.data[i].goods_code === productCode) {
                    setProductDetail(result.data[i]);
                };
            };
        };
        
    }, [result.isLoading]);

    // useEffect(() => {
    //     selFav();
    // }, []);

    // useEffect(() => {
    //     insFav();
    // },[fav]);

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
    
    // 좋아요 리스트
    const selFav = async() => {
        const data = {
            user_id: sessionStorage.getItem('userId'),
            goods_code: productCode
        };
        await favList.mutateAsync(data);
        console.log(data.result.is_fav);
        setFav(data.result.is_fav);
    }

    //좋아요 클릭
    const changeFav = () => {
        setFav(fav => fav === 0 ? 1 : 0);
        insFav(fav);
        console.log(fav);
    }

    // 좋아요 insert
    const insFav = async () => {
        if(sessionStorage.getItem('userId') !== null){
            const data = {
            user_id: sessionStorage.getItem('userId'),
            goods_code : productCode,
            is_fav : fav === 0 ?1 :0,
            }
            await favControll.mutateAsync(data);
        } else{
            alert("로그인이 필요합니다.");
            window.location.replace("/login");
        }
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

    //스크롤 이동
    const moveScroll = (location) => {
        location.current.scrollIntoView({behavior:"smooth"})
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
                                    <i className="fa-solid fa-minus" onClick={countDown}></i>
                                    <span>{count}</span>
                                    <i className="fa-solid fa-plus" onClick={countUp}></i>
                                </div>
                                <div className="money">{Math.ceil(productDetail?.goods_price - (productDetail?.goods_price * (productDetail?.goods_sale * 0.01)))}원</div>
                            </Style.Quantity>
                            <Style.Total>
                                <span><b>총 상품가격</b></span>
                                <b>{Math.ceil(productDetail?.goods_price - (productDetail?.goods_price * (productDetail?.goods_sale * 0.01))) * count}원</b>
                            </Style.Total>
                            <Style.ButtonBox>
                                <Style.Button onClick={orderClick} color={"black"} to={`/order/info`}>바로구매하기</Style.Button>
                                <Style.Button onClick={() => { addBasket(productDetail, count) }}>장바구니 담기</Style.Button>
                                <Style.fav onClick={() => {changeFav(fav)}}>{fav === 0 ? "♡" : "❤︎"}</Style.fav>
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
                        <ul ref={DescriptionRef}>
                            <li>상세정보</li>
                            <li onClick={() => {
                                    moveScroll(returnRef);
                                }}>교환/반품</li>
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
                    <Style.Return>
                        <div className='nav'>
                            <ul ref={returnRef}>
                                <li onClick={() => {
                                    moveScroll(DescriptionRef);
                                }}>상세정보</li>
                                <li>교환/반품</li>
                            </ul>
                        </div>
                        <div className='info'>
                            <h4>교환/반품 정보</h4>
                            <ul>
                                <li>반품배송비(편도) : 3,500원 (최초 배송비 미결제시 7,000원 부과)</li>
                                <li>교환배송비(왕복) : 7,000원</li>
                                <li>보내실곳 : 회사 주소</li>
                                <li>단, 교환/반품 비용은 상품 및 교환/반품 사유에 따라 변경될 수 있으므로 교환/반품 신청 화면 확인 부탁드립니다.</li>
                            </ul>
                        </div>
                        <div className='period'>
                            <h4>교환/반품 사유에 따른 요청 가능 기간</h4>
                            <ul>
                                <li>구매자 단순 변심 : 상품 수령 후 7일 이내(구매자 반품 배송비 부담)</li>
                                <li>표시/광고와 상이, 계약 내용과 다르게 이행된 경우<br />
                                상품 수령 후 3개월 이내 혹은 표시/광고와 다른 사실을 안 날로부터 30일 이내(판매자 반품 배송비 부담)</li>
                            </ul>
                        </div>
                        <div className='refuse'>
                            <h4>교환/반품이 불가한 경우</h4>
                            <ul>
                                <li>교환/반품 요청이 기간이 지난 경우</li>
                                <li>소비자의 책임 있는 사유로 상품 등이 분실/파손/훼손된 경우(단, 확인을 위한 포장훼손 제외)</li>
                                <li>소비자의 사용/소비에 의해 상품 등의 가치가 현저히 감소한 경우 (예: 식품, 화장품, 향수, 음반)</li>
                                <li>제품을 설치 또는 장착하였거나 개통한 경우 (예 : 전자제품, 컴퓨터, 휴대폰 등)</li>
                                <li>시간의 경과에 의해 재판매가 곤란할 정도로 상품 등의 가치가 현저히 감소한 경우 (신선식품과 같이 유통기한이 정해져 있는 상품)</li>
                                <li>복제가 가능한 상품 등의 포장을 훼손한 경우 (CD/DVD/GAME/BOOK의 경우 포장 개봉 시)</li>
                                <li>주문제작 상품 중 상품제작에 들어간 경우(주문접수 후 개별생산, 맞춤 제작 등)</li>
                            </ul>
                        </div>
                        <div className='condition'>
                            <h4>거래 조건에 대한 정보</h4>
                            <ul>
                                <li>소화물 택배의 배송은 발송일로부터 1~2 영업일이 소요되나, <br />
                                지역/대형 화물/설치/예약/발송지체 등의 특이사항에 따라 배송기간은 달라 질 수 있습니다.</li>
                                <li>`전자상거래등에서의 소비자보호에 관한 법률`이 정하는 바에 따라 소비자의 청약철회 후 판매자가 재화 등을 반환 받은 날로부터 3영업일 이내에 지급받은 대금의 환급을 정당한 사유없이 지연하는 때에는 소비자는 지연기간에 대해서 전상법 시행령으로 정하는 이율을 곱하여 산정한 지연이자(지연배상금)을 신청할 수 있습니다.</li>
                            </ul>
                        </div>
                    </Style.Return>
                </Style.Description>
            </div>

            {result.isLoading && <Loading />}
        </Style.Padding >
    );
};

export default Detail;