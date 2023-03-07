import React, { useState, useEffect} from 'react'
import { useMutation, useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

import { categoryList, productEditor, reqGoodsData } from 'utils/axios';

import ImageUpload from 'components/admin/product/input/ImageUpload';
import ProductInput from 'components/admin/product/input/Input';
import ProductOption from 'components/admin/product/input/ProductOption';
import ProductSelect from 'components/admin/product/input/Select';
import Textarea from 'components/admin/product/input/Textarea';

import Top from 'components/admin/Top';
import Loading from 'components/loding/Loading';

import * as Common from 'assets/styleComponent/admin/common';
import * as Style from 'assets/styleComponent/admin/product/edit';

const Edit = () => {
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
    const [productData, setProductData] = useState();
    const {productCode} = useParams();

    const result = useQuery("categoryList", categoryList);
    const { mutateAsync, isLoading } = useMutation(productEditor);
    const getGoods = useMutation(reqGoodsData);


    useEffect(() => {
        // 카테고리 가져오기
        if (result.isLoading === false) {
            setFirstCategory(result.data);
        }
        getProductData();
    }, [result.isLoading])

    useEffect(() => {
        // 카테고리 1번 선택하면 2번에 카테고리 1번 하위 카테고리 가져오기
        for (let i = 0; i < firstCategory.length; i++) {
            if (firstCategory[i].cate_code === Number(cate01)) {
                setSecondCategory(firstCategory[i].lowCategory);
            }
        }
        
        }, [cate01])

    const getProductData = async () =>{
        const data = {
            goods_code : productCode
        }
        await getGoods.mutateAsync(data);
        setProductName(productName => data.result.result.goods_nm);
        setPrice(price => data.result.result.goods_price);
        setDiscount(discount => data.result.result.goods_sale);
        setSell(sell => data.result.result.goods_sell);
        setStock(stock => data.result.result.goods_stock);
        setProductContent(productContent => data.result.result.goods_detail);
        let cateData = data.result.result.cate_code;
        let str = cateData.toString();
        let firCate = str.slice(0,2);
        setCate01(cate01 => firCate);
        setCate02(cate02 => str);
        setThumbnail(thumbnail => data.result.result.goods_img);
    }

    const onSubmit = async (e) => {
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
    //에디터 실제로 이미지 있는지없는지 확인하고 없으면 지워줌
    let arr = imageCode;
    for (let i = 0; i < imageCode.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (productContent.indexOf(imageCode[i]) === -1) {
                if (arr[j] === imageCode[i]) {
                    arr.splice(j, 1);
                    j--;
                }
            }
            setImageCode(arr);
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
        image_code: imageCode,
        goods_option: productOption,
        type: "product",
    }
    await mutateAsync(data);
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
                <Common.Container>
                    <Style.H2>상품 기본 설정</Style.H2>
                    <ProductInput title="상품이름" type="text" name="prodctName" placeholder="상품이름" onChange={onChange} value={productName} />
                    <ProductSelect title="카테고리 1번" type="text" name="firstCategory" placeholder="상품이름" onChange={onChange} option={firstCategory} value={cate01}/>
                    <ProductSelect title="카테고리 2번" type="text" name="secondCategory" placeholder="상품이름" onChange={onChange} option={secondCategory} value={cate02} />
                </Common.Container>

                <Common.Container>
                    <Style.H2>상품 상세 설정</Style.H2>
                    <ProductInput title="가격" type="text" name="price" placeholder="상품가격" onChange={onChange} value={price} />
                    <ProductInput title="할인률" type="text" name="discount" placeholder="할인률(% 적용 숫자만 적어주세요)" onChange={onChange} value={discount} />
                    <ProductInput title="판매 수량" type="text" name="sell" placeholder="판매 수량" onChange={onChange} value={sell}/>
                    <ProductInput title="재고" type="text" name="stock" placeholder="재고" onChange={onChange} value={stock} />
                    <ImageUpload title="상품썸네일" thumbnail={thumbnail} setThumbnail={setThumbnail} value={thumbnail} />
                    <Textarea title="상품상세설명" name="detailCotent" placeholder="상품상세설명" onChange={onChange} setProductContent={setProductContent} setImageCode={setImageCode} type="product" value={productContent}/>
                    <ProductOption title="상품 옵션 선택" setProductOption={setProductOption} />
                    <Style.ProductRegister type='submit'>상품 수정</Style.ProductRegister>
                </Common.Container>
            </form>
        </>
    )
}

export default Edit;