import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { productRegister } from "utils/axios";
import Input from "components/input/Input";

import * as Style from "assets/styleComponent/myPage/myPage"
import * as Login from "assets/styleComponent/login/login";



const Info = ({ }) => {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productImage, setProductImage] = useState("");
    const [productDetail, setProductDetail] = useState("");
    const [productStock, setProductStock] = useState("");
    const [productSell, setProductSell] = useState("");
    const [productSale, setProductSale] = useState("");

    const { mutateAsync, isLoading } = useMutation(productRegister);

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = {
            cate: "1",
            goods_nm: productName,
            goods_price: productPrice,
            goods_img: productImage,
            goods_detail: productDetail,
            goods_stock: productStock,
            goods_sell: productSell,
            goods_sale: productSale,
        };
        mutateAsync(data);
    }

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        switch (name) {
            case "productName":
                setProductName(value);
                break;
            case "productPrice":
                setProductPrice(value);
                break;
            case "productImage":
                setProductImage(value);
                break;
            case "productDetail":
                setProductDetail(value);
                break;
            case "productStock":
                setProductStock(value);
                break;
            case "productSell":
                setProductSell(value);
                break;
            case "productSale":
                setProductSale(value);
                break;
            default:
                break;
        }
    }

    return (
        <Style.InDiv>
            <div className='subTitle'>
                <div>
                    <h2>개인 정보 수정</h2>
                    <div className='grayTitle'>회원님의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한번 확인해주세요.</div>
                </div>
            </div>
            <div className='contents'>
                <>
                    <Style.Form onSubmit={onSubmit}>
                        <div>
                            <Input type="text" name="name" onChange={onChange} placeholder="이름" />
                            <Input type="text" name="id" onChange={onChange} placeholder="아이디" />
                            <Input type="password" name="pw" onChange={onChange} placeholder="비밀번호" />
                            <Input type="text" name="tell" onChange={onChange} placeholder="전화번호" />
                            <Input type="text" name="email" onChange={onChange} placeholder="이메일" />
                            <Input type="text" name="address" onChange={onChange} placeholder="주소" />
                            <input type="submit" value="회원가입" />
                        </div>
                    </Style.Form>
                </>
            </div>
        </Style.InDiv>
    );
};
export default Info;