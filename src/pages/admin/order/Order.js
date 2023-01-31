import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { orderManagement } from 'utils/axios';
import Top from 'components/admin/Top';

import * as Style from 'assets/styleComponent/admin/order/order';
import Loading from 'components/loding/Loading';

const Order = () => {
    const nav = useNavigate();
    const { boardPage } = useParams();
    const result = useQuery("orderManagement", orderManagement);
    const [board, setBoard] = useState();

    const pageing = () => {
        let page = [];
        const viewCount = 1;
        const minPage = 1;
        const maxPage = Math.ceil(result.data?.length / viewCount);
        const minNav = Number(boardPage) - 2 < 1 ? 1 : Number(boardPage) - 2;
        const maxNav = Number(boardPage) + 2 > maxPage ? Number(boardPage) : Number(boardPage) + 2;
        const totalNav = 5;

        const pageLoop = (min, max) => {
            if (Number(boardPage) === 1) {
                max = totalNav <= maxPage ? max + 1 : max;
            } else if (Number(boardPage) === maxPage) {
                min = totalNav > maxPage ? min : maxPage - 2;
            }

            for (let i = min; i <= max; i++) {
                page.push(
                    <li key={i}><Link>{i}</Link></li>
                )
            }
        }

        if (minPage === maxPage) {
            page.push(
                <li><Link>{minPage}</Link></li>
            )
        } else {
            pageLoop(minNav, maxNav);
        }

        console.log(maxNav);
        return page;
    }

    useEffect(() => { }, [result.isLoading, nav])
    return (
        <>
            <Top title={"주문 관리"} isButton={false} />
            <Style.Padding>
                {
                    result.data?.map((a, i) => {
                        return (
                            <Style.Container key={i}>
                                <Style.Div>
                                    <ul>
                                        <li>주문번호 : {a?.orderCode}</li>
                                        <li>회원 ID : {a?.user_id}</li>
                                        <li>주문자 : {a?.buyer_name}</li>
                                        <li>주문자번호 : {a?.buyer_tel}</li>
                                        <li>상품금액 : {a?.order_pay}</li>
                                        <li>주문상품수 : {a?.order_count}</li>
                                        <li>송장번호 : 123123</li>
                                        <li>주문일자 : {a?.order_date}</li>
                                    </ul>
                                </Style.Div>
                                <Style.DetailButton>자세히 보기</Style.DetailButton>
                            </Style.Container>
                        )
                    })
                }
            </Style.Padding>
            <Style.Pageing>
                <ul>
                    <li><Link><i className="fa-solid fa-angles-left"></i></Link></li>
                    <li><Link><i className="fa-solid fa-angle-left"></i></Link></li>
                    {pageing()}
                    <li><Link><i className="fa-solid fa-angle-right"></i></Link></li>
                    <li><Link><i className="fa-solid fa-angles-right"></i></Link></li>
                </ul>
            </Style.Pageing>
            {result.isLoading && <Loading />}
        </>
    );
};

export default Order;