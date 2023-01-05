import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from "react-query";
import * as Style from "assets/styleComponent/main/mainProductList";

import { productList } from 'utils/axios';

const MainProductList = () => {
    let result = useQuery("prodcutList", productList);

    return (
        <Style.ProductList>
            <h2>비싼상품</h2>
            <ul>
                {
                    result.data?.map((a, i) => {
                        return (
                            <li key={i}>
                                <Link to={`/product/detail/${a.goods_code}`}>
                                    <img src={a.goods_img} alt="" />
                                    <h3>{a.goods_nm}</h3>
                                    <h4>{a.goods_price} 원</h4>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </Style.ProductList>
    );
};

export default MainProductList;