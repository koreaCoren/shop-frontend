import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams, Link } from 'react-router-dom';

import Loading from 'components/loding/Loading';
import loginCheck from 'utils/loginCheck';

import * as Style from "assets/styleComponent/product/products";

import noImg from "assets/images/noImg.gif";

const Products = ({ result }) => {
    const nav = useNavigate();
    const { categoryCode } = useParams();
    const [productList, setProductList] = useState();

    const reset = () => {
        const arr = [];
        for (let i = 0; i < result.data?.length; i++) {
            let getCateCode = String(result?.data[i].cate_code);
            if (getCateCode === categoryCode) {
                arr.push(result?.data[i]);
            } else if (getCateCode.substring(0, 2) === categoryCode) {
                arr.push(result?.data[i]);
            }
        }
        setProductList(arr);
    }

    useEffect(() => {
        reset();
    }, [result.isLoading, nav]);

    return (
        <>
            <Style.Products>
                <div className='wrap'>
                    <ul>
                        {
                            productList?.map((a, i) => {
                                return (
                                    <li key={i}>
                                        <Link to={`/product/detail/${a.goods_code}`}>
                                            <img src={a.goods_img === "" ? noImg : a.goods_img} alt="" />
                                            <h3>{a.goods_nm}</h3>
                                            <h4>{a.goods_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 원</h4>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </Style.Products>
            {result.isLoading && <Loading />}
        </>
    );
};

export default Products;