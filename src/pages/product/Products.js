import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams, Link } from 'react-router-dom';

import Loading from 'components/loding/Loading';
import loginCheck from 'utils/loginCheck';

import * as Style from "assets/styleComponent/product/products"

const Products = ({result, setOrderData}) => {
    const nav = useNavigate();
    useEffect(()=>{
        console.log(result.data); 
        console.log(nav);
    },[]);
    
    return (
        <Style.Products>
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
        </Style.Products>
    );
};

export default Products;