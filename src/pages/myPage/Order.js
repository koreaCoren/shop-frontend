import React, { useState, useEffect } from 'react';
import { orderList } from 'utils/axios';
import { useQuery, useMutation } from 'react-query';

import * as Style from "assets/styleComponent/myPage/myPage"
import * as OrderStyle from "assets/styleComponent/myPage/order"

const Order = ({ }) => {
    const [list, setBoard] = useState();
    const { mutateAsync, isSuccess } = useMutation(orderList);

    const getOrderData = async () => {
        const data = {
            user_id: sessionStorage.getItem('userId'),
        };
        await mutateAsync(data);
        setBoard(data.result);
    }

    useEffect(() => {
        getOrderData();
    }, [])
    console.log(list);
    // const list = data.result;
    return (
        <Style.InDiv>
            <div className='subTitle'>
                <OrderStyle.Div>
                    <h2>주문 내역</h2>
                    <div className='grayTitle'>최대 지난 3년간의 주문 내역까지 확인할 수 있어요</div>
                </OrderStyle.Div>
                <div className='new'>3개월</div>
            </div>

            {

                isSuccess &&
                list?.map((a, i) => {
                    return (
                        <div className='contents' key={i}>
                            <OrderStyle.Div>
                                <div>
                                    {a.order_date.substr(0, 10)} ({a.order_date.substr(11, 5)})
                                </div>
                                <div>
                                    주문내역 상세보기 {'>'}
                                </div>
                            </OrderStyle.Div>
                            <Style.Line></Style.Line>
                            <OrderStyle.Div>
                                <ul>
                                    <li><OrderStyle.SubTitle>상품명</OrderStyle.SubTitle> {a.goods_name}</li>
                                    <li><OrderStyle.SubTitle>주문번호</OrderStyle.SubTitle> {a.orderCode}</li>
                                    <li><OrderStyle.SubTitle>상품개수</OrderStyle.SubTitle> {a.order_count} 개</li>
                                    <li><OrderStyle.SubTitle>총 주문금액</OrderStyle.SubTitle> {a.order_pay}원</li>
                                </ul>
                            </OrderStyle.Div>
                        </div>
                    )
                })
            }
        </Style.InDiv >

    );
};
export default Order;