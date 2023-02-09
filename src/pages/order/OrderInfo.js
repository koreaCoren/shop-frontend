import React, { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import DaumPost from 'components/daumPost/DaumPost';

import Inicis from 'components/inicis/Inicis';
import { order, deliveryList } from 'utils/axios';

import * as Style from "assets/styleComponent/order/order"

const OrderInfo = ({ orderData }) => {
    const [orderMap, setOrderMap] = useState([...orderData]);
    const [buyerName, setBuyerName] = useState("");
    const [buyerTel, setBuyerTel] = useState("");
    const [buyerDetailAddress, setBuyerDetailAddress] = useState("");
    const [address, setAddress] = useState("");
    const [zoneCode, setZoneCode] = useState("");
    const [isPostOpen, setIsPostOpen] = useState(false);
    const [isPurchase, setIsPurchase] = useState(0);
    const [payData, setPayData] = useState({})
    const [userAddr, setUserAddr] = useState("");
    const [checkAddr, setCheckAddr] = useState("new");

    const { mutateAsync, isLoading } = useMutation(order);
    const getUserAddr = useMutation(deliveryList);

    const getAddrData = async() => {
        const data = {
            user_id : sessionStorage.getItem('userId')
        }
        await getUserAddr.mutateAsync(data);
        setUserAddr(data.result);
    }

    const checkRadio = (e) => {
        console.log(e.target.value);
        setCheckAddr(e.target.value);
    }

    useEffect(() => {
        getAddrData();
    },[])

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
        let orderDatas = [];
        let orderTotalPrice = 0;

        for (let i = 0; i < orderData.length; i++) {
            orderDatas.push({
                goods_code: orderData[i].product_code, // 상품코드
                goods_name: orderData[i].product_name, // 상품이름
                order_pay: orderData[i].total_price, // 총 상품가격
                order_count: orderData[i].prodcut_count, //상품 갯수
            })
            orderTotalPrice = orderTotalPrice + orderData[i].total_price;
        }

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
        const orderCode = serialNumber + dd + mm + yy + time;

        setPayData({
            productName: orderData[0].product_name,
            buyerName: buyerName,
            buyerTel: Number(buyerTel),
            buyerEmail: "",
            productPrice: Number(orderTotalPrice) > 50000 ? Number(orderTotalPrice) : Number(orderTotalPrice) + 2500,
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
            order_data: orderDatas,
            order_total_price: String(orderTotalPrice),
            buyer_name: buyerName, // 주문자 이름
            buyer_addr: address + "\n" + buyerDetailAddress, // 주문자 주소
            buyer_tel: buyerTel, // 주문자 번호
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
                {
                    orderMap.map((a, i) => {
                        return (
                            <Style.Purchase key={i}>
                                <ul className='title'>
                                    <li>상품정보</li>
                                    <li>수량</li>
                                    <li>할인율</li>
                                    <li>상품금액 <br />(할인적용)</li>
                                </ul>
                                <ul className="productInfo">
                                    <li>
                                        <img src={a.product_img} alt="" />
                                        <div className="content">
                                            <div className="title">{a.product_name}</div>
                                        </div>
                                    </li>
                                    <li>{a.prodcut_count}개</li>
                                    <li>{a.sale}%</li>
                                    <li>{a.total_price}원</li>
                                </ul>
                            </Style.Purchase>
                        )
                    })
                }

                <Style.Info>
                    <Style.SubTitle>배송 정보</Style.SubTitle>
                    <Style.Form>
                        <div>
                            <label htmlFor="">
                                <span>신규 주소</span>
                                <input 
                                    type="radio" 
                                    value="new" 
                                    name="addr"
                                    onChange={checkRadio}
                                    checked={checkAddr === "new"}
                                    />
                                <span>기존 주소</span>
                                <input 
                                    type="radio" 
                                    value="old"
                                    name="addr"
                                    onChange={checkRadio}/>
                            </label>
                        </div>
                        <div>
                            <span>주문자</span>
                            <input type="text" onChange={onChange} name='buyerName' value={checkAddr === "new" ? buyerName : userAddr.user_id} />
                        </div>
                        <div>
                            <span>받는 사람</span>
                            <input type="text" onChange={onChange} name='buyerName' value={checkAddr === "new" ? null : userAddr.ship_receiver} />
                        </div>
                        <div>
                            <span>연락처</span>
                            <input type="text" onChange={onChange} name='buyerTel' value={checkAddr === "new" ? buyerTel : userAddr.ship_phone} />
                        </div>
                        <div>
                            <span className='address' onClick={() => { setIsPostOpen(true) }}>주소찾기</span>
                            <input readOnly value={checkAddr === "new" ? address : userAddr.ship_address} name='orderAddress' />
                            <input type="text" value={checkAddr === "new" ? buyerDetailAddress : userAddr.ship_detail_address} onChange={onChange} placeholder='상세주소입력' name='buyerDetailAddress' />
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