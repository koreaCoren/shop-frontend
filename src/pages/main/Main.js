import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getProdcut } from 'api/product';
import { getBoard } from 'api/board';

import { comma } from 'utils/commaReplace';
import addBasket from 'utils/addBasket';
import createCode from 'utils/createCode';

import Loading from 'components/loding/Loading';

import * as Style from "assets/styleComponent/main/main"
import mainbanner from "assets/images/main/mainBanner.jpg";
import noImg from "assets/images/noImg.gif";
import { ReactComponent as Star } from 'assets/images/star.svg';

const Main = () => {
    const [result, setResult] = useState(null);
    const [mainReview, setMainReview] = useState(null);

    useEffect(() => {
        getProdcut(setResult);
        getBoard({
            boardPage: 1,
            boardType: "review"
        }, setMainReview);
    }, []);


    return (
        result === null || mainReview === null
            ? <Loading />
            : <main>
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

                <Style.Best>
                    <div className="wrap">
                        <h3>라이프힘 베스트</h3>
                        {
                            result[0]?.length > 0
                                ? <ul>
                                    {
                                        result[0]?.slice(0, 4).map((a, i) => {
                                            return (
                                                <li key={i}>
                                                    <div className="hoverBox">
                                                        <Link to={`/product/detail/${a.goods_code}`}>
                                                            <img src={a.goods_img === "" ? noImg : a.goods_img} alt="상품이미지" />
                                                        </Link>
                                                        <ul>
                                                            <li onClick={() => {
                                                                addBasket({
                                                                    product_code: a.goods_code,
                                                                    product_name: a.goods_nm,
                                                                    product_img: a.goods_img,
                                                                    price: a.goods_price,
                                                                    sale: a.goods_sale,
                                                                    prodcut_count: 1,
                                                                    option: null,
                                                                    basket_count: createCode(),
                                                                    goods_stock: a.goods_stock,
                                                                    total_price: Math.ceil((a.goods_price - (a.goods_price * (a.goods_sale * 0.01))))
                                                                }, 1)
                                                            }}><i className="fa-solid fa-basket-shopping"></i></li>
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
                                                                comma(a.goods_price)}원
                                                            </div>
                                                            : <div className="pay discount">
                                                                <p>
                                                                    {comma(a.goods_price)}원
                                                                </p>
                                                                <p>{comma(Math.ceil((a.goods_price - (a.goods_price * (a.goods_sale * 0.01)))))}원</p>
                                                            </div>
                                                    }
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                : <p style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>등록된 상품이 없습니다.</p>
                        }
                    </div>
                </Style.Best>

                <Style.Review>
                    <div className="wrap">
                        <h3>REAL REVIEW</h3>

                        {
                            mainReview.list.length > 0
                                ? <ul>
                                    {
                                        mainReview.list.slice(0, 4).map((a, i) => {
                                            return (
                                                <li key={i}>

                                                    <a href="/community/review/all/1">
                                                        <div>
                                                            <img src={a.firstImg ? a.firstImg : a.goods_img ? a.goods_img : noImg} alt={`리뷰이미지` + i} />
                                                        </div>
                                                        <div className="content">
                                                            <div className="star">
                                                                {
                                                                    [...Array(a.grade)].map((a, i) => (
                                                                        <Star key={i} fill='#ffd900'></Star>
                                                                    ))
                                                                }
                                                            </div>
                                                            <h4>{a.title.length === 16 ? a.title + '...' : a.title}</h4>
                                                            <p dangerouslySetInnerHTML={{ __html: a.content.length === 40 ? `${a.content} ...` : a.content }}></p>
                                                        </div>
                                                        <div className="bar"></div>
                                                        <div className="prodcutName">
                                                            <div><img src={a.goods_img ? a.goods_img : noImg} alt={`제품이미지` + i} /></div>
                                                            {a.goods_nm}
                                                        </div>
                                                    </a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                : <p style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>등록된 리뷰가 없습니다.</p>
                        }






                        {/* <ul>
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
                    </ul> */}
                        <div className="button">
                            <a className="more" href="/community/review/all/1">리뷰 모두 보기</a>
                        </div>
                    </div>
                </Style.Review>
            </main>
    );
};

export default Main;