import React, { useState } from 'react';
import * as Style from "assets/styleComponent/admin/product/list"
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import { productDelete, productList } from 'utils/axios';


const List = () => {
    const result = useQuery("prodcutList", productList);

    const { mutateAsync, isLoading } = useMutation(productDelete);

    const onDelete = (data) => {
        const ok = window.confirm("정말로 삭제 하시겠습니까?");
        if (ok) {
            mutateAsync({ goods_code: data.goods_code, goods_img: data.goods_img });
            window.location.reload();
        }
    }

    return (
        result.data?.map((a, i) => {
            return (
                <Style.Container key={i}>
                    <ul>
                        <Style.ProductList>
                            <img src={a.goods_img} alt="" />
                            <Style.Div>
                                <ul>
                                    <li>상품이름 : {a.goods_nm}</li>
                                    <li>가격 : {a.goods_price}원</li>
                                    <li>할인률 : {a.goods_sale}%</li>
                                </ul>
                                <ul>
                                    <li>수량 : {a.goods_sell}</li>
                                    <li>재고 : {a.goods_stock}</li>
                                </ul>
                            </Style.Div>
                            <Style.Ul>
                                <li><Link to="" >수정</Link></li>
                                <li><button type='button' onClick={() => { onDelete(a) }}>삭제</button></li>
                            </Style.Ul>
                        </Style.ProductList>
                    </ul>
                </Style.Container>
            )
        })
    );
};


export default List;