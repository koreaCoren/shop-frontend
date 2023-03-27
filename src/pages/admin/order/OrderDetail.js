import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation } from 'react-query';

import { orderManagementDetail, updateInvoice } from 'utils/axios';
import Top from 'components/admin/Top';
import Loading from 'components/loding/Loading';

import * as Style from 'assets/styleComponent/admin/order/orderDetail'
import * as Common from 'assets/styleComponent/admin/common'

const OrderDetail = () => {
    const { orderCode } = useParams();
    const { mutateAsync, isLoading, isSuccess } = useMutation(orderManagementDetail);
    const [detail, setDetail] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [invoiceNumber, setInvoiceNumber] = useState(detail[0]?.delivery);

    const sendOCData = useMutation(updateInvoice);

    const getDetail = async () => {
        let price = 0;
        const data = {
            orderCode: orderCode,
        }
        await mutateAsync(data);
        setDetail(data.detail);
        setInvoiceNumber(data.detail[0].delivery);
        for (let i = 0; i < data.detail.length; i++) {
            price = price + Number(data.detail[i].order_pay);
            setTotalPrice(price);
        }
    }

    const cardType = () => {
        switch (detail[0].gopaymethod) {
            case "0":
                return "카드"
            case "1":
                return "무통장"
            case "2":
                return "핸드폰"
            case "3":
                return "계좌이체"
            default:
                return "에러 개발자에게 문의해주세요"
        }
    }

    const onChange = (e) => {
        setInvoiceNumber(e.target.value);
    }

    const changeInvoiceCode = async () =>{
        const data = {
            "orderCode" : orderCode,
            "invoiceCode" : invoiceNumber
        }
        await sendOCData.mutateAsync(data);
    }

    useEffect(() => {
        getDetail();
    }, [])

    return (
        <>
            <Top title={"주문 상세보기"} isButton={false} />
            <Common.Padding>
                {
                    isSuccess &&
                    detail.map((a, i) => {
                        return (
                            <Common.Container key={i}>
                                <Style.Content>
                                    <li>상품이름 : {a.goods_name}</li>
                                    <li>상품 코드 : {a.goods_code}</li>
                                    <li>상품 금액 : {a.order_pay}</li>
                                    <li>상품 갯수 : {a.order_count}</li>
                                </Style.Content>
                            </Common.Container>
                        )
                    })
                }

                {
                    isSuccess &&
                    <Common.Container>
                        <Style.Content>
                            <li>주문자 아이디 : {detail[0].user_id}</li>
                            <li>주문자 이름 : {detail[0].buyer_name}</li>
                            <li>주문자 연락처 : {detail[0].buyer_tel}</li>
                            <li>받는사람 : {detail[0].receiver}</li>
                            <li>배송 주소 : {detail[0].buyer_addr}</li>
                            <li>주문 번호 : {detail[0].orderCode}</li>
                            <li>주문 날짜 : {detail[0].order_date}</li>
                            <li>상품 총 금액 : {totalPrice}</li>
                            <li>결제 유형 : {cardType()}</li>
                            <li>결제 완료 여부 : {detail[0].order_complete === "Y" ? "결제완료" : "미결제"}</li>
                            <li>
                                송장번호 : <input type="text" placeholder='송장번호를 입력해주세요' value={invoiceNumber} onChange={onChange} />
                                <button onClick={changeInvoiceCode}>수정</button>
                            </li>
                        </Style.Content>
                    </Common.Container>
                }
            </Common.Padding>
            {isLoading && <Loading />}
        </>
    );
};

export default OrderDetail;