import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import List from 'pages/admin/product/List';
import Register from 'pages/admin/product/Register';
import LinkButton from 'components/admin/product/button/LinkButton';

const Product = () => {
    const nav = useLocation();
    return (
        <>
            {
                nav.pathname === "/admin/product" &&
                <Top>
                    <h1>상품관리</h1>
                    <ul>
                        <li><LinkButton link="register" title="상품등록" /></li>
                    </ul>
                </Top>
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
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    box-shadow: 0px 0px 7px 0 #00000055;
    padding: 10px 15px;
`;
const Padding = styled.div`
    padding: 0px 15px;
`

export default Product;