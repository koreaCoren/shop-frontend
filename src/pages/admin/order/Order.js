import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { orderManagement } from 'utils/axios';
import Top from 'components/admin/Top';
import Loading from 'components/loding/Loading';
import Pageing from 'components/board/Pageing';

import * as Style from 'assets/styleComponent/admin/order/order';

const Order = () => {
    const nav = useNavigate();
    const { boardPage } = useParams();
    const [board, setBoard] = useState();
    const [boardCount, setBoardCount] = useState(4)
    const result = useQuery("orderManagement", orderManagement);

    useEffect(() => {
        const reverseArr = result.data?.reverse();
        setBoard(reverseArr?.slice((boardPage - 1) * boardCount, (boardPage - 1) * boardCount + boardCount));
    }, [result.isLoading, nav])

    return (
        <>
            <Top title={"주문 관리"} isButton={false} />
            <Style.Padding>
                {
                    board?.map((a, i) => {
                        return (
                            <Style.Container key={i}>
                                <Style.Div>
                                    <ul>
                                        <li>주문번호 : {a.orderCode}</li>
                                        <li>회원 ID : {a.user_id}</li>
                                        <li>주문자 : {a.buyer_name}</li>
                                        <li>주문자 번호 : {a.buyer_tel}</li>
                                        <li>총 상품 금액 : {a.total_price}</li>
                                        <li>총 상품수 : {a.total_count}</li>
                                        <li>송장번호 : 123123</li>
                                        <li>주문일자 : {a.order_date}</li>
                                    </ul>
                                </Style.Div>
                                <Style.DetailButton to={`/admin/orderDetail/${a?.orderCode}`}>자세히 보기</Style.DetailButton>
                            </Style.Container>
                        )
                    })
                }
            </Style.Padding>
            <Pageing count={boardCount} boardPage={boardPage} boardLength={result.data?.length} url={"/admin/order"} />
            {result.isLoading && <Loading />}
        </>
    );
};

export default Order;