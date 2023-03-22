import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useQuery } from 'react-query';

import { productList } from 'utils/axios';
import Detail from 'pages/product/Detail';
import Products from 'pages/product/Products';
import Basket from 'pages/product/Basket';

const Product = ({ setOrderData }) => {
    let result = useQuery("prodcutList", productList);

    return (
        <>
            <Routes>
                <Route path='detail/:productCode' element={<Detail result={result} setOrderData={setOrderData} />}></Route>
                <Route path='products/:categoryCode/:boardPage' element={<Products result={result} setOrderData={setOrderData} />}></Route>
                <Route path='basket' element={<Basket setOrderData={setOrderData} />}></Route>
            </Routes>
        </>
    );
};
export default Product;