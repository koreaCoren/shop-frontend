import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from "styled-components";

const EditOption = ({ title, setProductOption, data }) => {
    const [optionList, setOption] = useState([]);
    const [optionName, setOptionName] = useState([]);
    const [optionPrice, setOptionPrice] = useState([]);

    useEffect(() => {
        let arr = [];
        for (let i = 0; i < data.length; i++) {
            arr.push({ option_name: `${data[i].option_name}`, option_price: `${data[i].option_price}` });
        }
        setOption([...optionList, ...arr]);
    }, [])

    // 옵션 추가
    const createOption = () => {
        let arr = [];
        let index = optionList.length;
        arr.push({ option_name: `productOption${index + 1}`, option_price: `productPrice${index + 1}` });
        setOption([...optionList, ...arr]);
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
    useEffect(() => { }, [optionList]);


    const onChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        const arr = [];
        for (let i = 0; i < optionList.length; i++) {
            arr.push({ option_name: name });

        }
        setOptionName([...arr]);
    };



    return (
        <Div>
            <span>{title}</span>
            <div className='option'>
                <div>
                    <input type="button" value="옵션추가" onClick={createOption} />
                    <input type="button" value="옵션저장" onClick={saveOption} />
                </div>
                {
                    optionList?.map((a, i) => {
                        return (
                            <div key={i}>
                                <input className="optionName" type="text" name={`optionName${i}`} placeholder={`${i + 1}번 옵션명`} onChange={onChange} value={optionName[i]} />
                                <input className="price" type="text" name={`optionPrice${i}`} placeholder={`${i + 1}번 옵션 가격`} onChange={onChange} value={optionPrice[i]} />
                                {/* <input className="optionName" type="text" name={`optionName${i}`} placeholder={`${i + 1}번 옵션명`} onChange={onChange} value={optionName[i].option_name} />
                                <input className="price" type="text" name={`optionPrice${i}`} placeholder={`${i + 1}번 옵션 가격`} onChange={onChange} value={optionPrice[i].option_price} /> */}
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

export default EditOption;