import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from "react-query";
import styled from 'styled-components';

import { productList } from 'utils/axios';

const MainProductList = () => {
    let result = useQuery("prodcutList", productList);

    return (
        <ProductList>
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
        </ProductList>
    );
};

const ProductList = styled.div`
    padding: 50px 0px;
    h2{
        text-align: center;
        font-size: 30px;
        margin-bottom: 50px;
    }

    ul{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 15px;
    }

    ul li{
        text-align: center;
    }

    ul li a{
        width: 100%;
    }

    ul li img{
        width: 100%;
        height: 250px;
    }

    ul li h3{
        font-size: 24px;
        margin: 5px 0px;
    }
    ul li h4{
        font-size: 16px;
    }
`

export default MainProductList;