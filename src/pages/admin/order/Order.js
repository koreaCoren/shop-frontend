import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';

import { orderManagement } from 'utils/axios';
import Top from 'components/admin/Top';

import * as Style from 'assets/styleComponent/admin/order/order';
import Loading from 'components/loding/Loading';

const Order = () => {
    const result = useQuery("orderManagement", orderManagement);
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
                    <li><Link>처음</Link></li>
                    <li><Link>이전</Link></li>
                    <li><Link className='now'>1</Link></li>
                    <li><Link>2</Link></li>
                    <li><Link>3</Link></li>
                    <li><Link>4</Link></li>
                    <li><Link>5</Link></li>
                    <li><Link>다음</Link></li>
                    <li><Link>끝</Link></li>
                </ul>
            </Style.Pageing>
            {result.isLoading && <Loading />}
        </>
    );
};

export default Order;