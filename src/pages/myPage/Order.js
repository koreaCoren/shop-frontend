import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useQuery, useMutation } from 'react-query';

import { orderList } from 'utils/axios';
import Loading from 'components/loding/Loading';
import Pageing from 'components/board/Pageing';
import SubTitle from 'components/myPage/SubTitle';

import * as Common from "assets/styleComponent/myPage/myPage"
import * as Style from "assets/styleComponent/myPage/order"

const Order = ({ }) => {
    const nav = useNavigate();
    const { boardPage } = useParams();
    const [count, setCount] = useState(4);
    const [board, setBoard] = useState();
    const [sliceBoard, setSliceBoard] = useState();
    const { mutateAsync, isSuccess, isLoading } = useMutation(orderList);

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

    useEffect(() => {
        setSliceBoard(board?.slice((boardPage - 1) * count, (boardPage - 1) * count + count))
    }, [isLoading, nav])

    return (
        <Common.InDiv>
            <SubTitle h2={"주문 내역"} h3={"최대 지난 3년간의 주문 내역까지 확인할 수 있어요"} clickEvent={null} clickText={null} />
            {
                isSuccess &&
                sliceBoard?.map((a, i) => {
                    return (
                        <div className='contents' key={i}>
                            <Style.Div>
                                <div>
                                    {a.order_date.substr(0, 10)} ({a.order_date.substr(11, 5)})
                                </div>
                                <div>
                                    <Link to={`/myPage/orderDetail/${a.orderCode}`} state={{ orderCode: a.orderCode }}> 상세보기 {'>'}</Link>
                                </div>
                            </Style.Div>
                            <Common.Line></Common.Line>

                            <img src={a.goods_img} alt="" />
                            <Style.Div>
                                <ul>
                                    <li><Style.SubTitle>상품명</Style.SubTitle> {a.goods_name}</li>
                                    <li><Style.SubTitle>주문번호</Style.SubTitle> {a.orderCode}</li>
                                    <li><Style.SubTitle>총 상품개수</Style.SubTitle> {a.total_count}개</li>
                                    <li><Style.SubTitle>총 주문금액</Style.SubTitle> {a.total_price}원</li>
                                </ul>
                            </Style.Div>
                        </div >
                    )
                })
            }

            <Pageing count={count} boardPage={boardPage} boardLength={board?.length} url={"/myPage/order"} />
            {isLoading && <Loading />}
        </Common.InDiv >

    );
};
export default Order;