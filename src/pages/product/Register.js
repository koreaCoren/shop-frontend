import ImageUpload from 'components/input/ImageUpload';
import LoginInput from 'components/input/Input';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { productRegister } from "utils/axios";

const Register = () => {
    const nav = useNavigate();

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
        <>
            <hr />
            <h1>???????????????</h1>
            <form onSubmit={onSubmit}>
                <LoginInput type="text" placeholder="?????????" name="productName" onChange={onChange} />
                <br />
                <LoginInput type="text" placeholder="????????????" name="productPrice" onChange={onChange} />
                <br />
                ???????????????
                <ImageUpload setImageData={setProductImage} />
                <img src={productImage} alt="" />
                <br />
                <LoginInput type="text" placeholder="?????????????????????" name="productDetail" onChange={onChange} />
                <br />
                <LoginInput type="text" placeholder="??????" name="productStock" onChange={onChange} />
                <br />
                <LoginInput type="text" placeholder="??????" name="productSell" onChange={onChange} />
                <br />
                <LoginInput type="text" placeholder="??????" name="productSale" onChange={onChange} />
                <br />
                <input type="submit" value="?????????" />
            </form>
            <hr />
        </>
    );
};

export default Register;