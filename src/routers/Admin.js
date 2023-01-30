import React from 'react';
import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import Product from 'pages/admin/product/Product';
import SideMenu from 'components/admin/sideMenu/SideMenu';
import Category from 'pages/admin/category/Category';
import Order from 'pages/admin/order/Order';
import Delivery from 'pages/admin/delivery/Delivery';

import styled from 'styled-components';

const Admin = ({ setHeader }) => {
    const nav = useNavigate();

    useEffect(() => {
        setHeader(false);
        if (sessionStorage.getItem("userId") !== "admin" &&
            sessionStorage.getItem("userId") !== "pkd") {
            alert("접근불가능합니다.");
            nav("/");
        }
    }, [nav])

    return (
        <Div>
            <SideMenu></SideMenu>
            <div style={{ backgroundColor: "#eee" }}>
                <Routes>
                    <Route path='/product/*' element={<Product />} />
                    <Route path='/category/*' element={<Category />} />
                    <Route path='/order/*' element={<Order />} />
                    <Route path='/delivery/*' element={<Delivery />} />
                </Routes>
            </div>
        </Div>
    );
};

const Div = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
    min-width: 1200px;
    min-height: 100vh;
`
export default Admin;