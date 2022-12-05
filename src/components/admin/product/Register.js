import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import ImageUpload from './input/ImageUpload';
import ProductInput from './input/Input';
import ProductSelect from './input/Select';
import Textarea from './input/Textarea';

const Register = () => {
    const [option, setOption] = useState([{ value: "Asd", content: "dasdsa" }]);
    const [imageData, setImageData] = useState("");

    const onChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        switch (name) {
            default:
                break;
        }
    };
    return (
        <>
            <form>
                <Container>
                    <h2>상품 기본 설정</h2>
                    <ProductInput title="상품이름" type="text" name="prodctName" placeholder="상품이름" onChange={onChange} />
                    <ProductSelect title="카테고리 1번" type="text" name="firstCategory" placeholder="상품이름" onChange={onChange} option={option} />
                    <ProductSelect title="카테고리 2번" type="text" name="secondCategory" placeholder="상품이름" onChange={onChange} option={option} />
                </Container>

                <Container>
                    <h2>상품 상세 설정</h2>
                    <ProductInput title="가격" type="text" name="price" placeholder="상품가격" onChange={onChange} />
                    <ProductInput title="할인률" type="text" name="discount" placeholder="할인률" onChange={onChange} />
                    <ProductInput title="재고" type="text" name="discount" placeholder="재고" onChange={onChange} />
                    <ImageUpload title="상품썸네일" imageData={imageData} setImageData={setImageData}></ImageUpload>
                    <Textarea title="상품상세설명" name="detailCotent" placeholder="상품상세설명" onChange={onChange}></Textarea>
                </Container>
            </form>
        </>
    );
};

const Container = styled.div`
    background-color: #fff;
    border-radius: 5px;
    padding: 15px;
    box-shadow: 2px 2px 6px 0 #00000044;
    margin: 15px 0px;
    h2{
        margin-bottom: 30px;
    }
`

export default Register;