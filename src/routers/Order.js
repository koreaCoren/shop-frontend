import React, { useState } from 'react';
import * as Style from "assets/styleComponent/order/order"
import { order } from 'utils/axios';
import { useMutation } from 'react-query';
import DaumPost from 'components/daumPost/DaumPost';
import Inicis from 'components/inicis/Inicis';

const Order = ({ orderData }) => {
    const [orderName, setOrderName] = useState("");
    const [orderTel, setOrderTel] = useState("");
    const [orderDetailAddress, setOrderDetailAddress] = useState("");
    const [address, setAddress] = useState("");
    const [zoneCode, setZoneCode] = useState("");
    const [isPostOpen, setIsPostOpen] = useState(false);
    const [isPurchase, setIsPurchase] = useState(0);
    const [payData, setPayData] = useState({
        productName: "",
        buyerName: "",
        buyerTel: 0,
        buyerEmail: "",
        productPrice: 0,
        payStatus: 0,
        returnUrl: "http://localhost:3000/order/info",
        closeUrl: "http://localhost:3000/close",
    })

    const { mutateAsync, isLoading } = useMutation(order);

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        switch (name) {
            case "orderName":
                setOrderName(value);
                break;
            case "orderTel":
                setOrderTel(value);
                break;
            case "orderDetailAddress":
                setOrderDetailAddress(value);
                break;

            default:
                break;
        }
    }

    const payment = (e) => {
        e.preventDefault();
        setPayData({
            productName: orderData.product_name,
            buyerName: orderName,
            buyerTel: Number(orderTel),
            buyerEmail: "",
            productPrice: Number(orderData.total_price),
            payStatus: 0,
            returnUrl: "http://localhost:3000/shop-backend/backend/order/ini_orders",
            closeUrl: "http://localhost:3000/close",
        })
        const data = {
            order_code: orderData.product_code,
            user_id: sessionStorage.getItem("userId"),
            goods_code: orderData.product_code,
            goods_name: orderData.product_name,
            order_pay: orderData.total_price,
            recipient: orderName,
            recipient_addr: address + "\n" + orderDetailAddress,
            recipient_phone: orderTel,
            order_count: orderData.prodcut_count,
            refund: "ㄴ",
        }
        mutateAsync(data);
        setIsPurchase(isPurchase + 1);
    }
    return (
        <Style.Order>
            <div className="wrap">
                <Style.Title>주문/결제</Style.Title>
                <Style.Purchase>
                    <ul className='title'>
                        <li>상품정보</li>
                        <li>배송비 <br />(5만원이상 무료)</li>
                        <li>수량</li>
                        <li>할인율</li>
                        <li>상품금액 <br />(할인적용)</li>
                    </ul>
                    <ul className="productInfo">
                        <li>
                            <img src={orderData.product_img} alt="" />
                            <div className="content">
                                <div className="title">{orderData.product_name}</div>
                            </div>
                        </li>
                        <li>{Number(orderData.total_price) >= 50000 ? 0 : orderData.deliveryPay}원</li>
                        <li>{orderData.prodcut_count}개</li>
                        <li>{orderData.sale}%</li>
                        <li>{orderData.total_price}원</li>
                    </ul>
                </Style.Purchase>

                <Style.Info>
                    <Style.SubTitle>배송 정보</Style.SubTitle>
                    <Style.Form>
                        <div>
                            <span>주문자</span>
                            <input type="text" onChange={onChange} name='orderName' />
                        </div>
                        <div>
                            <span>연락처</span>
                            <input type="text" onChange={onChange} name='orderTel' />
                        </div>
                        <div>
                            <span className='address' onClick={() => { setIsPostOpen(true) }}>주소찾기</span>
                            <input readOnly value={address === "" ? "" : address} name='orderAddress' />
                            <input type="text" onChange={onChange} placeholder='상세주소입력' name='orderDetailAddress' />
                        </div>
                        {
                            isPostOpen && <DaumPost
                                setIsPostOpen={setIsPostOpen}
                                setZoneCode={setZoneCode}
                                setAddress={setAddress}
                            >test</DaumPost>
                        }
                        <button className='submit' onClick={payment}>결제하기</button>
                    </Style.Form>
                </Style.Info>

                <Inicis payData={payData} isPurchase={isPurchase} />
            </div>
        </Style.Order >
    );
};
export default Order;