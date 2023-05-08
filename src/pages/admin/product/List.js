import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getProdcut, deleteProduct } from 'api/product.js';

import Loading from 'components/loding/Loading';

import * as Style from "assets/styleComponent/admin/product/list"
import * as Common from "assets/styleComponent/admin/common"

import noImg from "assets/images/noImg.gif";

const List = () => {
    const [list, setList] = useState(null);

    useEffect(() => {
        getProdcut(setList);
    }, [])

    const onDelete = (delProduct) => {
        const data = {
            goods_code: delProduct.goods_code,
            goods_img: delProduct.goods_img,
            goods_nm: delProduct.goods_nm
        }
        deleteProduct(data);
    }

    return (
        list === null
            ? <Loading />
            : <>
                <Common.Container>
                </Common.Container>
                {
                    list[0].map((a, i) => {
                        return (
                            <Common.Container key={i}>
                                <ul>
                                    <Style.ProductList>
                                        <img src={a.goods_img === "" ? noImg : a.goods_img} alt="" />
                                        <Style.Div>
                                            <ul>
                                                <li>상품이름 : {a.goods_nm}</li>
                                                <li>가격 : {a.goods_price}원</li>
                                                <li>할인률 : {a.goods_sale}%</li>
                                            </ul>
                                            <ul>
                                                <li>판매 수량 : {a.goods_sell}</li>
                                                <li>재고 : {a.goods_stock}</li>
                                                {
                                                    a.goods_stock == 0
                                                        ? <li className='warning'>재고 부족!</li>
                                                        : ""
                                                }
                                            </ul>
                                        </Style.Div>
                                        <Style.Ul>
                                            <li><Link to={`modfiy/${a.goods_code}`} >수정</Link></li>
                                            <li><button type='button' onClick={() => { onDelete(a) }}>삭제</button></li>
                                        </Style.Ul>
                                    </Style.ProductList>
                                </ul>
                            </Common.Container>
                        )
                    })
                }
            </>
    );
};


export default List;