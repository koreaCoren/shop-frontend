import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';

import { track } from 'utils/delivery';
import { comma } from 'utils/commaReplace';
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
    const [state, setState] = useState();
    const result = useMutation(orderManagement);

    const getOrder = async () => {
        const data = {};
        let trackResult = [];
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
        data.result.list.forEach(e => {
            track(e.carrier, e.delivery, trackResult);
        });
        setState([...trackResult]);
    }

    useEffect(() => {
        getOrder()
    }, [nav, searchParams.get("search")])
    console.log(state);
    return (
        result.isSuccess !== true
            ? <Loading />
            : <>
                <Top title={"주문 관리"} isButton={false} />
                <Common.Padding>
                    <Common.Container>
                    </Common.Container>
                    {
                        board.list?.map((a, i) => {

                            return (
                                <Common.Container key={i} style={{ textAlign: "center" }}>
                                    <Style.Div>
                                        <ul>
                                            <li>주문번호 : {a.orderCode}</li>
                                            <li>회원 ID : {a.user_id}</li>
                                            <li>상품명 : {a.goods_name}</li>
                                            <li>주문자 이름 : {a.buyer_name}</li>
                                            <li>주문자 번호 : {a.buyer_tel}</li>
                                            <li>총 상품 금액 : {comma(a.total_price)}</li>
                                            <li>배송 현황 : {state[i]}</li>
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