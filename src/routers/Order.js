import React from 'react';
import * as Style from "assets/styleComponent/order/order"
import { order } from 'utils/axios';
import { useMutation } from 'react-query';

const Order = ({ orderData }) => {
    const { mutateAsync, isLoading } = useMutation(order);
    const onSubmit = () => {
        const data = {
            order_code: "123",
            user_id: "pkd",
            goods_code: "10101010",
            goods_name: "pkd",
            order_pay: "100",
            recipient: "박경도",
            receipt_addr: "코랜",
            receipt_phone: "01000000000",
            order_count: "2",
            refund: "ㄴ",
        }
        mutateAsync(data);
    }
    return (
        <Style.Order>
            <button onClick={onSubmit}>귀찮네</button>
            <div className="wrap">
                <Style.Title>주문/결제</Style.Title>
                <Style.Purchase>
                    <ul className='title'>
                        <li>상품정보</li>
                        <li>수량</li>
                        <li>상품금액</li>
                    </ul>
                    <ul className="productInfo">
                        <li>
                            <img src={orderData.product_img} alt="" />
                            <div className="content">

                            </div>
                        </li>
                    </ul>
                </Style.Purchase>
            </div>
        </Style.Order>
    );
};
export default Order;