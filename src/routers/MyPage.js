import React from 'react';
import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import Banner from 'pages/myPage/Banner';
import SideMenu from 'pages/myPage/SideMenu';
import Address from 'pages/myPage/Address';
import Info from 'pages/myPage/Info';
import Order from 'pages/myPage/Order';
import Pick from 'pages/myPage/Pick';
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
            <Style.Div className="wrap" style={{ backgroundColor: "#eee" }}>
                <SideMenu></SideMenu>
                <Routes>
                    <Route path="/info" element={<Info />} />
                    <Route path="/order" element={<Order />} />
                    <Route path="/pick" element={<Pick />} />
                    <Route path="/address" element={<Address />} />
                </Routes>
            </Style.Div>
        </main>

    );
};


export default MyPage;