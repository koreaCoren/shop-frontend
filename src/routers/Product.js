import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { getProdcut } from 'api/product.js';

import Detail from 'pages/product/Detail';
import Products from 'pages/product/Products';
import Basket from 'pages/product/Basket';

const Product = ({ setOrderData }) => {
    const [productList, setProductList] = useState(null);

    useEffect(() => {
        getProdcut(setProductList);
    }, []);

    return (
        <>
            <Routes>
                <Route path='detail/:productCode' element={<Detail result={productList} setOrderData={setOrderData} />}></Route>
                <Route path='products/:categoryCode/:boardPage' element={<Products result={productList} setOrderData={setOrderData} />}></Route>
                <Route path='basket' element={<Basket setOrderData={setOrderData} />}></Route>
            </Routes>
        </>
    );
};
export default Product;