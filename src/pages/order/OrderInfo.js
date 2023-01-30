import React, { useState } from 'react';
import { useMutation } from 'react-query';
import DaumPost from 'components/daumPost/DaumPost';

import Inicis from 'components/inicis/Inicis';
import { order } from 'utils/axios';

import * as Style from "assets/styleComponent/order/order"

const OrderInfo = ({ orderData }) => {
    const [buyerName, setBuyerName] = useState("");
    const [buyerTel, setBuyerTel] = useState("");
    const [buyerDetailAddress, setBuyerDetailAddress] = useState("");
    const [address, setAddress] = useState("");
    const [zoneCode, setZoneCode] = useState("");
    const [isPostOpen, setIsPostOpen] = useState(false);
    const [isPurchase, setIsPurchase] = useState(0);
    const [payData, setPayData] = useState({})

    const { mutateAsync, isLoading } = useMutation(order);

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        switch (name) {
            case "buyerName":
                setBuyerName(value);
                break;
            case "buyerTel":
                setBuyerTel(value);
                break;
            case "buyerDetailAddress":
                setBuyerDetailAddress(value);
                break;

            default:
                break;
        }
    }

    const payment = (e) => {
        e.preventDefault();

        if (buyerName === "") {
            alert("주문자 입력해주세요");
            return;
        } else if (buyerTel === "") {
            alert("연락처 입력해주세요");
            return;
        } else if (buyerDetailAddress === "") {
            alert("상세주소 입력해주세요");
            return;
        }

        const date = new Date();
        const yy = date.getFullYear().toString().substring(2);
        const mm = (("00" + (date.getMonth() + 1)).slice(-2));
        const dd = (("00" + date.getDate()).slice(-2));
        const time = (("00" + date.getHours().toString()).slice(-2)) + (("00" + date.getMinutes().toString()).slice(-2));
        const serialNumber = Math.floor((Math.random() * (999 - 100) + 100));
        const orderCode = yy + mm + dd + time + serialNumber;

        setPayData({
            productName: orderData.product_name,
            buyerName: buyerName,
            buyerTel: Number(buyerTel),
            buyerEmail: "",
            productPrice: Number(orderData.total_price),
            payStatus: 0,
            returnUrl: `http://localhost:3000/shop-backend/backend/order/ini_transaction?orderCode=${orderCode}`,
            closeUrl: "http://localhost:3000/close",
        })

        const data = {
            mid: "", // 이니시스 mid
            mKey: "", // 이니시스 mkey
            gopaymethod: "0", // 결제방법
            order_code: orderCode, // 주문코드
            user_id: sessionStorage.getItem("userId"), // 유저 아이디
            goods_code: orderData.product_code, // 상품코드
            goods_name: orderData.product_name, // 상품이름
            order_pay: orderData.total_price, // 총 상품가격
            buyer_name: buyerName, // 주문자 이름
            buyer_addr: address + "\n" + buyerDetailAddress, // 주문자 주소
            buyer_tel: buyerTel, // 주문자 번호
            order_count: orderData.prodcut_count, //상품 갯수
            return_url: "http://localhost:3000/shop-backend/backend/order/ini_transaction", // 백엔드 리턴 url
            refund: "ㄴ", //환불여부
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
                            <input type="text" onChange={onChange} name='buyerName' />
                        </div>
                        <div>
                            <span>연락처</span>
                            <input type="text" onChange={onChange} name='buyerTel' />
                        </div>
                        <div>
                            <span className='address' onClick={() => { setIsPostOpen(true) }}>주소찾기</span>
                            <input readOnly value={address === "" ? "" : address} name='orderAddress' />
                            <input type="text" onChange={onChange} placeholder='상세주소입력' name='buyerDetailAddress' />
                        </div>
                        {
                            isPostOpen && <DaumPost
                                setIsPostOpen={setIsPostOpen}
                                setZoneCode={setZoneCode}
                                setAddress={setAddress}
                            ></DaumPost>
                        }
                        <button className='submit' onClick={payment}>결제하기</button>
                    </Style.Form>
                </Style.Info>

                <Inicis payData={payData} isPurchase={isPurchase} />
            </div>
        </Style.Order >
    );
};
export default OrderInfo;