import React from 'react';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Product from './product/Product';
import SideMenu from './sideMenu/SideMenu';

const Admin = ({ setHeader }) => {
    useEffect(() => {
        setHeader(false);
    }, [])
    return (
        <Div>
            <SideMenu></SideMenu>
            <div style={{ backgroundColor: "#eee" }}>
                <Routes>
                    <Route path='/product/*' element={<Product />} />
                </Routes>
            </div>
        </Div>
    );
};
const Div = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
    min-width: 1200px;
`
export default Admin;