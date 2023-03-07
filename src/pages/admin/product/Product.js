import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import List from 'pages/admin/product/List';
import Register from 'pages/admin/product/Register';
import Edit from 'pages/admin/product/Edit';
import Top from "components/admin/Top";

import * as Common from "assets/styleComponent/admin/common"

const Product = () => {
    const nav = useLocation();
    return (
        <>
            {
                nav.pathname === "/admin/product" && <Top title={"상품등록"} isButton={true} buttonTitle={"상품등록"} buttonLink={"register"} />
            }
            <Common.Padding>
                <Routes>
                    <Route path='/' element={<List />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/edit/:productCode' element={<Edit />}></Route>
                </Routes>
            </Common.Padding>
        </>
    );
};

export default Product;