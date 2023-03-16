import React from 'react';
import { Link } from 'react-router-dom';

import SubTitle from 'components/myPage/SubTitle';

import * as Common from "assets/styleComponent/myPage/myPage"
import * as Style from "assets/styleComponent/myPage/review"

import noImg from "assets/images/noImg.gif";

const Review = () => {
    return (
        <Common.InDiv>
            <SubTitle h2={"상품후기 작성"} h3={"구매하신 상품후기를 작성 하실 수 있습니다."} clickEvent={null} clickText={null} />

            <Style.ReviewList>
                <li>
                    <div>
                        <img src={noImg} alt="" />
                        <div className="content">
                            <h4>pkd 상품입니다</h4>
                            <h5>상품 설명</h5>
                            <h5>1개</h5>
                            <h5>100,000원</h5>
                        </div>
                        <Link to="?">후기 작성하기</Link>
                    </div>
                </li>
                <li>
                    <div>
                        <img src={noImg} alt="" />
                        <div className="content">
                            <h4>pkd 상품입니다</h4>
                            <h5>상품 설명</h5>
                            <h5>1개</h5>
                            <h5>100,000원</h5>
                        </div>
                        <Link to={`/mypage/reviewWrite/${"상품코드 넣을 예정"}`}>후기 작성하기</Link>
                    </div>
                </li>
            </Style.ReviewList>
        </Common.InDiv>
    );
};

export default Review;