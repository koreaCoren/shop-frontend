import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Detail from 'pages/product/Detail';
import Products from 'pages/product/Products';
import Basket from 'pages/product/Basket';
import { OrderDataInterface, Props } from 'interfaces/app';
import { useEffect } from 'react';
import axios from '../api/axios';

const Product: React.FC<Props> = ({ setOrderData }) => {
    const test = async () => {
        const res = await axios.get('/order/test');
        const tt: OrderDataInterface = res.data;
        setOrderData([tt,]);
        console.log(tt);
    };
    useEffect(() => {
        test();
    }, []);
    return (
        <>
            <Routes>
                <Route path="detail/:productCode" element={<Detail setOrderData={setOrderData} />}></Route>
                <Route path="products/:categoryCode/:boardPage" element={<Products />}></Route>
                <Route path="basket" element={<Basket setOrderData={setOrderData} />}></Route>
            </Routes>
        </>
    );
};
export default Product;
