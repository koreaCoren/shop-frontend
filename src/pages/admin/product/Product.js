import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import List from 'pages/admin/product/List';
import Register from 'pages/admin/product/Register';
import Top from "components/admin/Top";

const Product = () => {
    const nav = useLocation();
    return (
        <>
            {
                nav.pathname === "/admin/product" && <Top title={"상품등록"} buttonTitle={"상품등록"} buttonLink={"register"} />
            }
            <Padding>
                <Routes>
                    <Route path='/' element={<List />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </Padding>
        </>
    );
};

const Padding = styled.div`
    padding: 0px 15px;
`

export default Product;