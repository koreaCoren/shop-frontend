import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from "react-query";
import { productList } from 'utils/axios';

const List = () => {
    let result = useQuery("prodcutList", productList);
    return (
        <>
            {
                sessionStorage.getItem("loginCheck") === "success"
                    ? <Link to="/product/register">상품등록</Link>
                    : null
            }
            <ul>
                {
                    result.data?.map((a, i) => {
                        return (
                            <li key={i}>
                                <img src={a.goods_img} alt="" />
                                <h2>{a.goods_nm}</h2>
                                <h3>{a.goods_price}원</h3>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    );
};

export default List;