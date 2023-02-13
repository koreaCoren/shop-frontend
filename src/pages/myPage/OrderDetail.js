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
    const deliveryPrice = 2500;

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
                                    <li><OrderStyle.SubTitle>상품개수</OrderStyle.SubTitle> {a.order_count}개</li>
                                    <li><OrderStyle.SubTitle>주문금액</OrderStyle.SubTitle> {a.order_pay}원</li>
                                    <li><OrderStyle.SubTitle>할인금액</OrderStyle.SubTitle> {a.goods_sale}원</li>
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
                        <div>{list ? list[0].delivery : '확인중'}<div><a href="https://tracker.delivery/#/:carrier_id/:track_id" target="_blank">배송조회</a></div></div>

                    </li>
                </ul>
            </OrderStyle.ListDiv>

            <Style.Line></Style.Line>


            <OrderStyle.Space></OrderStyle.Space>


            <OrderStyle.Div>
                <h2 className='botTitle'>결제정보</h2>
            </OrderStyle.Div>
            <Style.BoldLine></Style.BoldLine>
            <OrderStyle.ListDiv>
                <ul>
                    <li>
                        <div>총 상품금액</div>
                        <div>{list ? list[0].total_price : '0'} 원</div>
                    </li>
                    <li>
                        <div>총 상품할인금액</div>
                        <div>{list ? list[0].total_sale : '0'} 원</div>
                    </li>
                    <li>
                        <div>배송비</div>
                        <div>{deliveryPrice} 원</div>
                    </li>
                    <li>
                        <div>결제금액</div>
                        <div>{list ? list[0].total_price + list[0].total_sale + deliveryPrice : '0'} 원</div>
                    </li>
                    <li>
                        <div>결제일시</div>
                        <div>{list ? list[0].order_date : '확인중'}</div>
                    </li>
                </ul>
            </OrderStyle.ListDiv>
            <Style.Line></Style.Line>


            <OrderStyle.Space></OrderStyle.Space>


            <OrderStyle.Div>
                <h2 className='botTitle'>배송정보</h2>
            </OrderStyle.Div>
            <Style.BoldLine></Style.BoldLine>
            <OrderStyle.ListDiv>
                <ul>
                    <li>
                        <div>받는분</div>
                        <div>{list ? list[0].buyer_name : '확인중'}</div>
                    </li>
                    <li>
                        <div>핸드폰</div>
                        <div>{list ? list[0].buyer_tel : '확인중'}</div>
                    </li>
                    <li>
                        <div>주소</div>
                        <div>{list ? list[0].buyer_addr : '확인중'}</div>
                    </li>

                </ul>
            </OrderStyle.ListDiv>
            <Style.Line></Style.Line>

        </Style.InDiv >

    );
};
export default OrderDetail;