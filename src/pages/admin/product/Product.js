import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import List from 'pages/admin/product/List';
import Register from 'pages/admin/product/Register';
import Top from "components/admin/Top";

import * as Style from "assets/styleComponent/admin/product/product"

const Product = () => {
    const nav = useLocation();
    return (
        <>
            {
                nav.pathname === "/admin/product" && <Top title={"상품등록"} isButton={true} buttonTitle={"상품등록"} buttonLink={"register"} />
            }
            <Style.Padding>
                <Routes>
                    <Route path='/' element={<List />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </Style.Padding>
        </>
    );
};

export default Product;