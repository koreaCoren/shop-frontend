import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Register from './Register';

const Product = () => {
    return (
        <>
            <Top>
                <h1>상품관리</h1>
                <ul>
                    <li><Link to="register">상품등록</Link></li>
                </ul>
            </Top>
            <Padding>
                <Routes>
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
    ul li a{
        line-height: 30px;
        background-color: #1a6dff;
        color: #fff;
        padding: 0px 15px;
        border-radius: 5px;
    }
`;
const Padding = styled.div`
    padding: 0px 15px;
`

export default Product;