import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getOrderCode, cancelOrder } from 'api/order.js';

import { track } from 'utils/delivery';

import SubTitle from 'components/myPage/SubTitle';
import Loading from 'components/loding/Loading';

import * as Common from "assets/styleComponent/myPage/myPage"
import * as Style from "assets/styleComponent/myPage/order"

const OrderDetail = ({ }) => {
    const DELIVERY_PRICE = 2500;
    const { orderCode } = useParams();
    const [list, setList] = useState(null);
    const [state, setState] = useState();
    let trackResult = [];

    const getOrderDetailData = async () => {
        const data = {
            user_id: sessionStorage.getItem('userId'),
            orderCode: orderCode,
        };

        getOrderCode(data, setList);

        await track(data.result[0].carrier, data.result[0].delivery, trackResult);
        setState(...trackResult);
    }

    useEffect(() => {
        getOrderDetailData();
    }, [])

    return (
        list === null
            ? <Loading />
            : <Common.InDiv>
                <SubTitle h2={"주문 내역상세"} h3={null} clickEvent={null} clickText={"1:1문의하기"} />
                <Style.CodeTitle> 주문번호 {list ? list[0].orderCode : ''}</Style.CodeTitle>
                {
                    list !== null &&
                    list?.map((a, i) => {
                        return (
                            <div className='contents' key={i}>
                                <Style.Div>
                                    <Style.MainTitle>상품명 : {a.goods_name}</Style.MainTitle>

                                </Style.Div>
                                <Common.Line></Common.Line>

                                <Style.Div>
                                    <ul>
                                        {/* <li><Style.SubTitle>상품명</Style.SubTitle> {a.goods_name}</li> */}
                                        <li><Style.SubTitle>상품개수</Style.SubTitle> {a.order_count}개</li>
                                        <li><Style.SubTitle>주문금액</Style.SubTitle> {a.order_pay}원</li>
                                        <li><Style.SubTitle>할인금액</Style.SubTitle> {a.goods_sale}원</li>
                                    </ul>
                                </Style.Div>
                            </div >
                        )
                    })
                }
                <Style.Div>
                    <h2 className='botTitle'>배송조회</h2>
                </Style.Div>

                <Common.BoldLine></Common.BoldLine>

                <Style.ListDiv>
                    <ul>
                        <li>
                            <div>배송현황</div>
                            <div>
                                {
                                    list
                                        ? list[0].delivery === '' || list[0].carrier === ''
                                            ? <span>주문접수</span>
                                            : state
                                                ? <span>{state}</span>
                                                : <span style={{ color: "red" }}> 송장입력오류</span>
                                        : <span>확인중</span>
                                }
                                <div>
                                    <a href={list ?
                                        list[0].delivery === '' || list[0].carrier === ''
                                            ? '#'
                                            : `https://tracker.delivery/#/${list[0].carrier}/${list[0].delivery}`
                                        : '확인중'} target="_blank">배송조회</a>
                                </div>

                            </div>

                        </li>
                    </ul>
                </Style.ListDiv>

                <Common.Line></Common.Line>

                <Style.Space></Style.Space>

                <Style.Div>
                    <h2 className='botTitle'>결제정보</h2>
                </Style.Div>
                <Common.BoldLine></Common.BoldLine>
                <Style.ListDiv>
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
                            <div>{DELIVERY_PRICE} 원</div>
                        </li>
                        <li>
                            <div>결제금액</div>
                            <div>{list ? list[0].total_price + list[0].total_sale + DELIVERY_PRICE : '0'} 원</div>
                        </li>
                        <li>
                            <div>결제일시</div>
                            <div>{list ? list[0].order_date : '확인중'}</div>
                        </li>
                    </ul>
                </Style.ListDiv>

                <Common.Line></Common.Line>

                <Style.Space></Style.Space>

                <Style.Div>
                    <h2 className='botTitle'>배송정보</h2>
                </Style.Div>
                <Common.BoldLine></Common.BoldLine>
                <Style.ListDiv>
                    <ul>
                        <li>
                            <div>받는분</div>
                            <div>{list ? list[0].receiver : '확인중'}</div>
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
                </Style.ListDiv>
                <Common.Line></Common.Line>

                <Common.Button style={{ marginTop: "10px" }}>
                    <button>주문 취소</button>
                </Common.Button>
            </Common.InDiv >
    );
};
export default OrderDetail;