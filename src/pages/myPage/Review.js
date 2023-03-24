import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from 'react-query';

import SubTitle from 'components/myPage/SubTitle';
import { buyProductList } from 'utils/axios';
import { comma } from 'utils/commaReplace';

import * as Common from "assets/styleComponent/myPage/myPage"
import * as Style from "assets/styleComponent/myPage/review"

import noImg from "assets/images/noImg.gif";
import Loading from 'components/loding/Loading';

const Review = () => {
    const [boardList, setBoardList] = useState();
    const { mutateAsync, isSuccess } = useMutation(buyProductList);

    const getProductReview = async () => {
        const data = {
            user_id: sessionStorage.getItem("userId"),
        }
        await mutateAsync(data);
        setBoardList(data.result)
    }

    useEffect(() => {
        getProductReview();
    }, [])

    return (
        isSuccess !== true
            ? <Loading />
            : <Common.InDiv>
                <SubTitle h2={"상품후기 작성"} h3={"구매하신 상품후기를 작성 하실 수 있습니다."} clickEvent={null} clickText={null} />

                <Style.ReviewList>
                    {
                        boardList.map((a, i) => {
                            return (
                                <li key={i}>
                                    <div>
                                        <img src={
                                            a.goods_img === ""
                                                ? noImg
                                                : a.goods_img
                                        } alt="" />
                                        <div className="content">
                                            <h4>{a.goods_name}</h4>
                                            <h5>{a.order_count}개</h5>
                                            <h5>{comma(a.order_pay)}원</h5>
                                        </div>
                                        {
                                            a.review === "Y"
                                                ? <Link to={`/community/review/all/1`}>후기 작성완료</Link>
                                                : 
                                                    // <Link style={{ backgroundColor: "#1a6dff" }} 
                                                    // to={{
                                                    // pathname: `/mypage/reviewWrite/${a.goods_code}/${a.orderCode}`,
                                                    // state:{
                                                    //     goods_name: a.goods_name,
                                                    //     goods_img : a.goods_img
                                                    // }}} >후기 작성하기</Link>
                                                    <Link style={{ backgroundColor: "#1a6dff" }} 
                                                    to={`/mypage/reviewWrite/${a.goods_code}/${a.orderCode}`}
                                                    state={{
                                                        goods_name: a.goods_name,
                                                        goods_img : a.goods_img
                                                    }} >후기 작성하기</Link>
                                        }
                                    </div>
                                </li>
                            )
                        })
                    }
                </Style.ReviewList>
            </Common.InDiv>
    );
};

export default Review;