import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';

import { orderManagement } from 'utils/axios';
import Top from 'components/admin/Top';
import Loading from 'components/loding/Loading';
import Pageing from 'components/board/Pageing';

import * as Style from 'assets/styleComponent/admin/order/order';
import * as Common from 'assets/styleComponent/admin/common';
import Searching from 'components/board/Searching';

const Order = () => {
    const nav = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const { boardPage } = useParams();
    const [board, setBoard] = useState();
    const result = useMutation(orderManagement);

    const getOrder = async () => {
        const data = {}
        if (searchParams.get("search") === null) {
            data.boardPage = boardPage;
            data.boardType = "order";
        } else {
            data.boardPage = boardPage;
            data.boardType = "order";
            data.search = searchParams.get("search");
        }
        await result.mutateAsync(data);
        setBoard(data.result);
    }

    useEffect(() => {
        getOrder()
    }, [nav, searchParams.get("search")])

    return (
        result.isSuccess !== true
            ? <Loading />
            : <>
                <Top title={"주문 관리"} isButton={false} />
                <Common.Padding>
                    <Common.Container>
                        <Searching board={board.list} setBoardList={setBoard} searchType={"order"} />
                    </Common.Container>
                    {
                        board.list.map((a, i) => {
                            return (
                                <Common.Container key={i} style={{ textAlign: "center" }}>
                                    <Style.Div>
                                        <ul>
                                            <li>주문번호 : {a.orderCode}</li>
                                            <li>회원 ID : {a.user_id}</li>
                                            <li>받는 사람 : {a.receiver}</li>
                                            <li>주문자 번호 : {a.buyer_tel}</li>
                                            <li>총 상품 금액 : {a.total_price}</li>
                                            <li>총 상품수 : {a.total_count}</li>
                                            <li>송장번호 : {a.delivery}</li>
                                            <li>주문일자 : {a.order_date}</li>
                                        </ul>
                                    </Style.Div>
                                    <Style.DetailButton to={`/admin/orderDetail/${a?.orderCode}`}>자세히 보기</Style.DetailButton>
                                </Common.Container>
                            )
                        })
                    }
                </Common.Padding>
                <Pageing boardPage={boardPage} boardLength={board.count.page_count} url={"/admin/order"} />
            </>
    );
};

export default Order;