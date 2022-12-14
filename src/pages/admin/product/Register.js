import React, { useEffect } from 'react';
import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import * as Style from "assets/styleComponent/admin/product/register"

import { categoryList, productRegister } from 'utils/axios';

import ImageUpload from 'components/admin/product/input/ImageUpload';
import ProductInput from 'components/admin/product/input/Input';
import ProductOption from 'components/admin/product/input/ProductOption';
import ProductSelect from 'components/admin/product/input/Select';
import Textarea from 'components/admin/product/input/Textarea';
import Loading from 'components/loding/Loading';

const Register = () => {
    const [productName, setProductName] = useState("");
    const [cate01, setCate01] = useState("");
    const [cate02, setCate02] = useState("");
    const [firstCategory, setFirstCategory] = useState([]);
    const [secondCategory, setSecondCategory] = useState([]);
    const [price, setPrice] = useState("");
    const [discount, setDiscount] = useState("");
    const [sell, setSell] = useState("");
    const [stock, setStock] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [productContent, setProductContent] = useState("");
    const [productOption, setProductOption] = useState("");
    const [imageCode, setImageCode] = useState([]);

    const result = useQuery("categoryList", categoryList);
    const { mutateAsync, isLoading } = useMutation(productRegister);

    useEffect(() => {
        // 카테고리 가져오기
        if (result.isLoading === false) {
            setFirstCategory(result.data);
        }
    }, [result.isLoading])

    useEffect(() => {
        // 카테고리 1번 선택하면 2번에 카테고리 1번 하위 카테고리 가져오기
        for (let i = 0; i < firstCategory.length; i++) {
            if (firstCategory[i].cate_code === Number(cate01)) {
                setSecondCategory(firstCategory[i].lowCategory);
            }
        }
        setCate02("");
    }, [cate01])

    const onSubmit = (e) => {
        e.preventDefault();

        if (productName === "") {
            alert("상품 이름 입력해주세요");
            return;
        } else if (cate01 === "선택해주세요" || cate01 === "") {
            alert("카테고리 1번 선택해주세요");
            return;
        } else if (price === "") {
            alert("상품 가격 입력해주세요");
            return;
        } else if (sell === "") {
            alert("상품 수량 입력해주세요");
            return;
        } else if (stock === "") {
            alert("상품 재고 입력해주세요");
            return;
        }

        //상품코드 연도뒷자리2개/월/일/시간/분/랜덤5자리
        const date = new Date();
        const yy = date.getFullYear().toString().substring(2);
        const mm = (("00" + (date.getMonth() + 1)).slice(-2));
        const dd = (("00" + date.getDate()).slice(-2));
        const time = (("00" + date.getHours().toString()).slice(-2)) + (("00" + date.getMinutes().toString()).slice(-2));
        const serialNumber = Math.floor((Math.random() * (99999 - 10000) + 10000));
        const productCode = yy + mm + dd + time + serialNumber;

        //에디터 실제로 이미지 있는지없는지 확인하고 없으면 지워줌
        let arr = [imageCode];
        for (let i = 0; i < imageCode.length; i++) {
            if (productContent.indexOf(imageCode[i]) === -1) {
                for (let j = 0; j < arr[0].length; j++) {
                    if (arr[0][j] === imageCode[i]) {
                        arr[0].splice(j, 1);
                        j--;
                    }
                }
                setImageCode(arr[0]);
            }
        }

        const data = {
            goods_code: productCode,
            goods_nm: productName,
            cate_code: cate02 === "" || cate02 === "선택해주세요" ? cate01 : cate02,
            goods_price: price,
            goods_sale: discount,
            goods_stock: stock,
            goods_sell: sell,
            goods_img: thumbnail,
            goods_detail: productContent,
            goods_imageCode: imageCode,
            goods_option: productOption,
        }
        mutateAsync(data);
    }

    const onChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        switch (name) {
            case "prodctName":
                setProductName(value);
                break;
            case "firstCategory":
                setCate01(value);
                break;
            case "secondCategory":
                setCate02(value);
                break;
            case "price":
                setPrice(value);
                break;
            case "discount":
                setDiscount(value);
                break;
            case "stock":
                setStock(value);
                break;
            case "sell":
                setSell(value);
                break;

            default:
                break;
        }
    };
    return (
        <>
            <form onSubmit={onSubmit}>
                <Style.Container>
                    <h2>상품 기본 설정</h2>
                    <ProductInput title="상품이름" type="text" name="prodctName" placeholder="상품이름" onChange={onChange} />
                    <ProductSelect title="카테고리 1번" type="text" name="firstCategory" placeholder="상품이름" onChange={onChange} option={firstCategory} />
                    <ProductSelect title="카테고리 2번" type="text" name="secondCategory" placeholder="상품이름" onChange={onChange} option={secondCategory} />
                </Style.Container>

                <Style.Container>
                    <h2>상품 상세 설정</h2>
                    <ProductInput title="가격" type="text" name="price" placeholder="상품가격" onChange={onChange} />
                    <ProductInput title="할인률" type="text" name="discount" placeholder="할인률(% 적용 숫자만 적어주세요)" onChange={onChange} />
                    <ProductInput title="수량" type="text" name="sell" placeholder="수량" onChange={onChange} />
                    <ProductInput title="재고" type="text" name="stock" placeholder="재고" onChange={onChange} />
                    <ImageUpload title="상품썸네일" thumbnail={thumbnail} setThumbnail={setThumbnail} />
                    <Textarea title="상품상세설명" name="detailCotent" placeholder="상품상세설명" onChange={onChange} setProductContent={setProductContent} setImageCode={setImageCode} />
                    <ProductOption title="상품 옵션 선택" setProductOption={setProductOption} />
                    <Style.ProductRegister type='submit'>상품 등록</Style.ProductRegister>
                </Style.Container>
            </form>

            {isLoading && <Loading />}
        </>
    );
};

export default Register;