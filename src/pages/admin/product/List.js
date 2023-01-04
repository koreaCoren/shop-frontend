import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import { productDelete, productList } from 'utils/axios';


const List = () => {
    const result = useQuery("prodcutList", productList);

    const { mutateAsync, isLoading } = useMutation(productDelete);

    const onDelete = (code) => {
        const ok = window.confirm("정말로 삭제 하시겠습니까?");
        if (ok) {
            mutateAsync({ goods_code: code });
            window.location.reload();
        }
    }

    return (
        result.data?.map((a, i) => {
            return (
                <Container key={i}>
                    <ul>
                        <ProductList>
                            <img src={a.goods_img} alt="" />
                            <Div>
                                <ul>
                                    <li>상품이름 : {a.goods_nm}</li>
                                    <li>가격 : {a.goods_price}원</li>
                                    <li>할인률 : {a.goods_sale}%</li>
                                </ul>
                                <ul>
                                    <li>수량 : {a.goods_sell}</li>
                                    <li>재고 : {a.goods_stock}</li>
                                </ul>
                            </Div>
                            <Ul>
                                <li><Link to="" >수정</Link></li>
                                <li><button type='button' onClick={() => { onDelete(a.goods_code) }}>삭제</button></li>
                            </Ul>
                        </ProductList>
                    </ul>
                </Container>
            )
        })
    );
};

const Container = styled.div`
    background-color: #fff;
    border-radius: 5px;
    padding: 15px;
    box-shadow: 2px 2px 6px 0 #00000044;
    margin: 15px 0px;
`
const ProductList = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:flex-start;
    gap: 10px;
    img{
        width: 82px;
        height: 82px;
        border-radius: 5px;
    }
`
const Div = styled.div`
    display: flex;
    flex: 1;
    gap: 10px;
    ul{
        display: flex;
        flex-direction: column;
        gap: 5px;
        flex: 1;
        li{
            background-color: #f5f5f5;
            padding: 5px;
            border-radius: 5px;
        }
    }
`
const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 5px;
    
    li a,
    button{
        line-height: 24px;
        background-color: #1a6dff;
        color: #fff;
        padding: 0px 15px;
        border-radius: 5px;
        cursor: pointer;
    }
`
export default List;