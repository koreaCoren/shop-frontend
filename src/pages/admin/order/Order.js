import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';

import { getOrder } from 'api/order.js';

import { deliveryStatus } from 'utils/delivery';
import { comma } from 'utils/commaReplace';

import Top from 'components/admin/Top';
import Loading from 'components/loding/Loading';
import Pageing from 'components/board/Pageing';
import Searching from 'components/board/Searching';

import * as Style from 'assets/styleComponent/admin/order/order';
import * as Common from 'assets/styleComponent/admin/common';

const Order = () => {
    const nav = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const { boardPage } = useParams();
    const [board, setBoard] = useState(null);
    const [state, setState] = useState([]);

    const getDeliveryStatus = async (req) => {
        const data = await deliveryStatus(req);
        setState(data);
    }

    useEffect(() => {
        const data = {
            boardPage: boardPage,
            boardType: "order",
            admin: true
        };

        if (searchParams.get("search") !== null) {
            data.search = searchParams.get("search");
        }

        getOrder(data, setBoard);
    }, [nav, searchParams.get("search")])

    useEffect(() => {
        board !== null && getDeliveryStatus(board.list);
    }, [board])

    return (
        board === null
            ? <Loading />
            : <>
                <Top title={"주문 관리"} isButton={false} />
                <Common.Padding>
                    <Common.Container>
                        <Searching board={board.list} setBoardList={setBoard} searchType={"order"} />
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
                                            {
                                                state[i] !== "송장 에러"
                                                    ? (<li>배송 현황 : {state[i]}</li>)
                                                    : (<li>배송 현황 : <span className='warning'>{state[i]}</span></li>)
                                            }
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