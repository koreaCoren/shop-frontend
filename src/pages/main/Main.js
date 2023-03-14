import React from 'react';
import { useEffect } from 'react';
import { useQuery } from 'react-query';

import { productList } from 'utils/axios';

import * as Style from "assets/styleComponent/main/main"

import mainbanner from "assets/images/main/mainBanner.jpg";
import best from "assets/images/main/best.jpg";
import { Link } from 'react-router-dom';
import addBasket from 'utils/addBasket';

import noImg from "assets/images/noImg.gif";

const Main = () => {
    let result = useQuery("prodcutList", productList);
    console.log(result.data);
    useEffect(() => { }, [result.isLoading]);
    return (
        <main>
            <Style.Banner>
                <img src={mainbanner} alt="" />
                <div className="content">
                    <div>
                        <h2>
                            귀한분께 드리는 <br />
                            <b>더 귀한 말굽버섯</b>
                        </h2>
                    </div>
                    <a href="#">Shop Now</a>
                </div>
            </Style.Banner>

            <Style.BrandStory>
                <div className="wrap">
                    <h2>Brand Story</h2>
                    <h3>라이프힘이 <br />특별한 이유</h3>

                    <p>라이프힘이 특별한 이유에 대한 설명을 기술하시오.</p>
                    <p>라이프힘이 특별한 이유에 대한 설명을 기술하시오.</p>
                    <p>라이프힘이 특별한 이유에 대한 설명을 기술하시오.</p>
                </div>
            </Style.BrandStory>

            <Style.ViewMore>
                <div className="wrap">
                    <div></div>
                    <h2>VIEW MORE</h2>
                    <ul>
                        <li>
                            <div>
                                <h3>
                                    <span>100% 말굽버섯 생산</span>
                                    <p>첨가물 없이 순수한 영양분 그대로</p>
                                </h3>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3>
                                    <span>100% 말굽버섯 생산</span>
                                    <p>첨가물 없이 순수한 영양분 그대로</p>
                                </h3>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3>
                                    <span>100% 말굽버섯 생산</span>
                                    <p>첨가물 없이 순수한 영양분 그대로</p>
                                </h3>
                            </div>
                        </li>
                    </ul>
                </div>
            </Style.ViewMore>

            {/* <Style.LifeHim>
                <div className="flexContainer">
                    <div className="content">
                        <h3>Life Him</h3>
                        <p>
                            라이프힘으로 자연에서 유래된 <br />
                            건강하고 활기찬 선물을 <br />
                            사랑하는 사람에게 전해보세요
                        </p>
                        <div className="slideButton">
                            <div className="slideBt prev"><i className="fa-solid fa-angle-left"></i></div>
                            <div className="slideBt next"><i className="fa-solid fa-angle-right"></i></div>
                        </div>
                    </div>
                    <div className="swiper mySwiper slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide slide">
                                <div className="hoverBox">
                                    <a href="#"><img src="./image/main/이미지4.jpg" alt="" /></a>
                                    <ul>
                                        <li><a href="#"><i className="fa-solid fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa-solid fa-basket-shopping"></i></a></li>
                                    </ul>
                                </div>
                                <div className="name">상품명</div>
                                <div className="text">말굽버섯 진액</div>
                                <div className="pay">140,000원</div>
                            </div>
                            <div className="swiper-slide slide">
                                <div className="hoverBox">
                                    <a href="#"><img src="./image/main/이미지5.jpg" alt="" /></a>
                                    <ul>
                                        <li><a href="#"><i className="fa-solid fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa-solid fa-basket-shopping"></i></a></li>
                                    </ul>
                                </div>
                                <div className="name">상품명</div>
                                <div className="text">말굽버섯 진액</div>
                                <div className="pay">140,000원</div>
                            </div>
                            <div className="swiper-slide slide">
                                <div className="hoverBox">
                                    <a href="#"><img src="./image/main/이미지6.jpg" alt="" /></a>
                                    <ul>
                                        <li><a href="#"><i className="fa-solid fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa-solid fa-basket-shopping"></i></a></li>
                                    </ul>
                                </div>
                                <div className="name">상품명</div>
                                <div className="text">말굽버섯 진액</div>
                                <div className="pay">140,000원</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Style.LifeHim> */}

            <Style.Best>
                <div className="wrap">
                    <h3>라이프힘 베스트</h3>
                    <ul>
                        {
                            result.data?.slice(0, 4).map((a, i) => {
                                return (
                                    <li key={i}>
                                        <div className="hoverBox">
                                            <Link to={`/product/detail/${a.goods_code}`}>
                                                <img src={a.goods_img === "" ? noImg : a.goods_img} alt="" />
                                            </Link>
                                            <ul>
                                                <li onClick={() => { addBasket(a, 1) }}><i className="fa-solid fa-basket-shopping"></i></li>
                                            </ul>
                                            {
                                                a.goods_sale > 0
                                                    ? <div className="sale">{a.goods_sale}% <br /> 할인!</div>
                                                    : null
                                            }
                                        </div>
                                        <div className="name">{a.goods_nm}</div>
                                        {
                                            Number(a.goods_sale) <= 0
                                                ? <div className="pay">{
                                                    a.goods_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                                                </div>
                                                : <div className="pay discount">
                                                    <p>
                                                        {a.goods_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                                                    </p>
                                                    <p>{Math.ceil((a.goods_price - (a.goods_price * (a.goods_sale * 0.01)))).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
                                                </div>
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                    {/* <ul>
                        <li>
                            <div className="hoverBox">
                                <a href="#">
                                    <img src={best} alt="" />
                                </a>
                                <ul>
                                    <li><a href="#"><i className="fa-solid fa-heart"></i></a></li>
                                    <li><a href="#"><i className="fa-solid fa-basket-shopping"></i></a></li>
                                </ul>
                            </div>
                            <div className="name">제품명을 입력 해주세요</div>
                            <div className="text">
                                건강한 한 포 습관, 말굽버섯 <br />
                                이곳에는 상품 요약 설명을 적어주세요
                            </div>
                            <div className="pay">140,000</div>
                        </li>
                        <li>
                            <div className="hoverBox">
                                <a href="#">
                                    <img src={best} alt="" />
                                </a>
                                <ul>
                                    <li><a href="#"><i className="fa-solid fa-heart"></i></a></li>
                                    <li><a href="#"><i className="fa-solid fa-basket-shopping"></i></a></li>
                                </ul>
                            </div>
                            <div className="name">제품명을 입력 해주세요</div>
                            <div className="text">
                                건강한 한 포 습관, 말굽버섯 <br />
                                이곳에는 상품 요약 설명을 적어주세요
                            </div>
                            <div className="pay">140,000</div>
                        </li>
                        <li>
                            <div className="hoverBox">
                                <a href="#">
                                    <img src={best} alt="" />
                                </a>
                                <ul>
                                    <li><a href="#"><i className="fa-solid fa-heart"></i></a></li>
                                    <li><a href="#"><i className="fa-solid fa-basket-shopping"></i></a></li>
                                </ul>
                            </div>
                            <div className="name">제품명을 입력 해주세요</div>
                            <div className="text">
                                건강한 한 포 습관, 말굽버섯 <br />
                                이곳에는 상품 요약 설명을 적어주세요
                            </div>
                            <div className="pay">140,000</div>
                        </li>
                    </ul> */}
                </div>
            </Style.Best>

            <Style.Review>
                <div className="wrap">
                    <h3>REAL REVIEW</h3>
                    <ul>
                        <li>
                            <a href="#">
                                <img src={best} alt="" />
                                <div className="content">
                                    <div className="star">★★★★★</div>
                                    <h4>포토리뷰는 앱 특성상 게시글이 반영되기까지 시간이
                                        다소 소요됩니다.</h4>
                                    <p>말굽버섯을 즙으로 먹어본 적이 없어서 많이 생경했지만, 성분이 좋다는
                                        이야기는 많이 들어서 마침 선물을 해 드릴 일이 있어서 처음 구매해봤습니다.
                                        패키지도 고급지고 우선 받으시는 분이 좋아해주셔서 뿌듯했습니다.</p>
                                    <div className="bar"></div>
                                </div>
                                <div className="prodcutName">
                                    <div><img src={best} alt="" /></div>
                                    더 진한 말굽버섯 1Box
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={best} alt="" />
                                <div className="content">
                                    <div className="star">★★★★★</div>
                                    <h4>포토리뷰는 앱 특성상 게시글이 반영되기까지 시간이
                                        다소 소요됩니다.</h4>
                                    <p>말굽버섯을 즙으로 먹어본 적이 없어서 많이 생경했지만, 성분이 좋다는
                                        이야기는 많이 들어서 마침 선물을 해 드릴 일이 있어서 처음 구매해봤습니다.
                                        패키지도 고급지고 우선 받으시는 분이 좋아해주셔서 뿌듯했습니다.</p>
                                    <div className="bar"></div>
                                </div>
                                <div className="prodcutName">
                                    <div><img src={best} alt="" /></div>
                                    더 진한 말굽버섯 1Box
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={best} alt="" />
                                <div className="content">
                                    <div className="star">★★★★★</div>
                                    <h4>포토리뷰는 앱 특성상 게시글이 반영되기까지 시간이
                                        다소 소요됩니다.</h4>
                                    <p>말굽버섯을 즙으로 먹어본 적이 없어서 많이 생경했지만, 성분이 좋다는
                                        이야기는 많이 들어서 마침 선물을 해 드릴 일이 있어서 처음 구매해봤습니다.
                                        패키지도 고급지고 우선 받으시는 분이 좋아해주셔서 뿌듯했습니다.</p>
                                    <div className="bar"></div>
                                </div>
                                <div className="prodcutName">
                                    <div><img src={best} alt="" /></div>
                                    더 진한 말굽버섯 1Box
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={best} alt="" />
                                <div className="content">
                                    <div className="star">★★★★★</div>
                                    <h4>포토리뷰는 앱 특성상 게시글이 반영되기까지 시간이
                                        다소 소요됩니다.</h4>
                                    <p>말굽버섯을 즙으로 먹어본 적이 없어서 많이 생경했지만, 성분이 좋다는
                                        이야기는 많이 들어서 마침 선물을 해 드릴 일이 있어서 처음 구매해봤습니다.
                                        패키지도 고급지고 우선 받으시는 분이 좋아해주셔서 뿌듯했습니다.</p>
                                    <div className="bar"></div>
                                </div>
                                <div className="prodcutName">
                                    <div><img src={best} alt="" /></div>
                                    더 진한 말굽버섯 1Box
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div className="button">
                        <a className="more" href="/pages/review.php?board=photoReview">리뷰 모두 보기</a>
                    </div>
                </div>
            </Style.Review>
        </main>
    );
};


export default Main;