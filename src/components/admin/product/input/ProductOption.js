import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from "styled-components";

const ProductOption = ({ title, setProductOption }) => {
    const [optionList, setOption] = useState([{ option_name: `productOption1`, option_price: `productPrice1` }]);

    // 옵션 추가
    const createOption = () => {
        let arr = [];
        let index = optionList.length;
        arr.push({ option_name: `productOption${index + 1}`, option_price: `productPrice${index + 1}` });
        setOption([...optionList, ...arr])
    }

    // 옵션 삭제
    const deleteOption = (index) => {
        let arr = [...optionList];
        arr.splice(index, 1);
        setOption([...arr]);
    }

    //옵션 저장
    const saveOption = () => {
        let arr = [];
        const optionName = document.querySelectorAll(".optionName");
        const price = document.querySelectorAll(".price");
        for (let i = 0; i < optionName.length; i++) {
            arr.push({ option_name: optionName[i].value, option_price: price[i].value });
        }
        setProductOption([...arr]);
    }
    useEffect(() => { }, [optionList])
    return (
        <Div>
            <span>{title}</span>
            <div className='option'>
                <div>
                    <input type="button" value="옵션추가" onClick={createOption} />
                    <input type="button" value="옵션저장" onClick={saveOption} />
                </div>
                {
                    optionList.map((a, i) => {
                        return (
                            <div key={i}>
                                <input className="optionName" type="text" name={a.optionName} placeholder={`${i + 1}번 옵션명`} />
                                <input className="price" type="text" name={a.price} placeholder={`${i + 1}번 옵션 가격`} />
                                <input type="button" value="삭제" onClick={() => {
                                    deleteOption(i);
                                }} />
                            </div>
                        )
                    })
                }
            </div>
        </Div>
    );
};

const Div = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0px;
    border-bottom: 1px solid #ddd;
    span{
        display: inline-block;
        width: 150px;
    }
    input[type="text"]{
        border: 1px solid #ccc;
        border-radius: 5px;
        line-height: 30px;
        padding: 0px 10px;
        width: 300px;
    }
    input[type="button"]{
        width: 100px;
    }
    .option{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .option div{
        display: flex;
        gap: 10px;
    }
`;

export default ProductOption;