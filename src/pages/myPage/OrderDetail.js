import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link, useLocation } from 'react-router-dom';
import { useQuery, useMutation } from 'react-query';

import { orderCodeList } from 'utils/axios';

import * as Style from "assets/styleComponent/myPage/myPage"
import * as OrderStyle from "assets/styleComponent/myPage/order"

const OrderDetail = ({ }) => {
    const location = useLocation();
    const { orderCode } = useParams();
    const [list, setList] = useState();
    const nav = useNavigate();
    const { mutateAsync, isSuccess, isLoading } = useMutation(orderCodeList);

    const getOrderDetailData = async () => {
        const data = {
            user_id: sessionStorage.getItem('userId'),
            orderCode: orderCode
        };
        await mutateAsync(data);
        setList(data.result);

    }

    useEffect(() => {
        getOrderDetailData();
    }, [])


    return (
        <Style.InDiv>
            <div className='subTitle'>
                <OrderStyle.Div>
                    <h2>주문 내역상세</h2>
                </OrderStyle.Div>
                <div>
                    <div className='grayTitle'>배송 또는 상품에 문제가 있나요?</div>
                    <div>1:1문의하기</div>
                </div>

            </div>
            <OrderStyle.CodeTitle> 주문번호 {list ? list[0].orderCode : ''}</OrderStyle.CodeTitle>
            {
                isSuccess &&
                list?.map((a, i) => {
                    return (
                        <div className='contents' key={i}>
                            <OrderStyle.Div>
                                <OrderStyle.MainTitle>상품명 : {a.goods_name}</OrderStyle.MainTitle>

                            </OrderStyle.Div>
                            <Style.Line></Style.Line>

                            <OrderStyle.Div>
                                <ul>
                                    {/* <li><OrderStyle.SubTitle>상품명</OrderStyle.SubTitle> {a.goods_name}</li> */}
                                    <li><OrderStyle.SubTitle>총 상품개수</OrderStyle.SubTitle> {a.order_count}개</li>
                                    <li><OrderStyle.SubTitle>총 주문금액</OrderStyle.SubTitle> {a.order_pay}원</li>
                                </ul>
                            </OrderStyle.Div>
                        </div >
                    )
                })
            }
            <OrderStyle.Div>
                <h2 className='botTitle'>배송조회</h2>
            </OrderStyle.Div>
            <Style.BoldLine></Style.BoldLine>
            <OrderStyle.ListDiv>
                <ul>
                    <li>
                        <div>배송현황</div>
                        <div>배송완료<div>배송조회</div></div>

                    </li>
                </ul>
            </OrderStyle.ListDiv>

        </Style.InDiv >

    );
};
export default OrderDetail;