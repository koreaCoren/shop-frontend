import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from "styled-components";

const ProductOption = ({ title, setProductOption }) => {
    const [optionList, setOption] = useState([{ optionName: `productOption1`, priceName: `productPrice1` }]);
    const createOption = () => {
        let arr = [];
        let index = optionList.length;
        arr.push({ optionName: `productOption${index + 1}`, priceName: `productPrice${index + 1}` });
        setOption([...optionList, ...arr])
    }

    const deleteOption = (index) => {
        let arr = [...optionList];
        arr.splice(index, 1);
        setOption([...arr]);
    }

    const saveOption = () => {
        let arr = [];
        const optionName = document.querySelectorAll(".optionName");
        const priceName = document.querySelectorAll(".priceName");
        for (let i = 0; i < optionName.length; i++) {
            arr.push({ optionName: optionName[i].value, price: priceName[i].value });
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
                                <input className="priceName" type="text" name={a.priceName} placeholder={`${i + 1}번 옵션 가격`} />
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