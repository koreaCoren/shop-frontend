import React from 'react';

import SubTitle from 'components/myPage/SubTitle';

import * as Style from "assets/styleComponent/myPage/myPage"

const Review = () => {
    return (
        <Style.InDiv>
            <SubTitle h2={"상품후기 작성"} h3={"구매하신 상품후기를 작성 하실 수 있습니다."} clickEvent={null} clickText={null} />

            <ul className="reviewList">
                <li>
                    <h4>pkd 상품</h4>
                    <div>
                        <img src="" alt="" />
                        <div className="content">
                            <h5>상품 설명</h5>
                            <h5>1개</h5>
                            <h5>100,000원</h5>
                        </div>
                    </div>
                </li>
            </ul>
        </Style.InDiv>
    );
};

export default Review;