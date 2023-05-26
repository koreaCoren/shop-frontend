import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import Banner from 'components/myPage/Banner';
import SideMenu from 'components/myPage/SideMenu';
import Address from 'pages/myPage/Address';
import Info from 'pages/myPage/Info';
import Order from 'pages/myPage/Order';
import OrderDetail from 'pages/myPage/OrderDetail';
import Review from 'pages/myPage/Review';
import ReviewWrite from 'pages/myPage/ReviewWrite';
import PersonalModify from 'pages/myPage/PersonalModify';
import * as Style from "assets/styleComponent/myPage/myPage"

const MyPage = () => {
    const nav = useNavigate();
    const [infoData, setInfoData] = useState(null);

    useEffect(() => {
        if (!sessionStorage.getItem("userId")) {
            alert("접근불가능합니다.");
            nav("/");
        }
    }, [nav])

    return (
        <main>
            <Banner></Banner>
            <Style.Div className="wrap">
                <SideMenu></SideMenu>
                <Routes>
                    <Route path="/info" element={<Info infoData={infoData} />} />
                    <Route path="/order/:boardPage" element={<Order />} />
                    <Route path="/orderDetail/:orderCode" element={<OrderDetail />} />
                    <Route path="/address" element={<Address />} />
                    <Route path="/review" element={<Review />} />
                    <Route path="/reviewWrite/:productCode/:orderCode" element={<ReviewWrite />} />
                    <Route path="/personalModify" element={<PersonalModify setInfoData={setInfoData} infoData={infoData} />} />
                </Routes>
            </Style.Div>
        </main>

    );
};


export default MyPage;