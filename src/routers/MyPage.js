import React from 'react';
import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import Banner from 'components/myPage/Banner';
import SideMenu from 'components/myPage/SideMenu';
import Address from 'pages/myPage/Address';
import Info from 'pages/myPage/Info';
import Order from 'pages/myPage/Order';
import OrderDetail from 'pages/myPage/OrderDetail';
import Pick from 'pages/myPage/Pick';
import Review from 'pages/myPage/Review';
import PersonalModify from 'pages/myPage/PersonalModify';
import * as Style from "assets/styleComponent/myPage/myPage"

const MyPage = () => {
    const nav = useNavigate();

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
                    <Route path="/info" element={<Info />} />
                    <Route path="/order/:boardPage" element={<Order />} />
                    <Route path="/orderDetail/:orderCode" element={<OrderDetail />} />
                    {/* <Route path="/pick" element={<Pick />} /> */}
                    <Route path="/address" element={<Address />} />
                    <Route path="/review" element={<Review />} />
                    <Route path="/personalModify" element={<PersonalModify />} />
                </Routes>
            </Style.Div>
        </main>

    );
};


export default MyPage;