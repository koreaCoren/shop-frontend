import Top from 'components/admin/Top';
import Loading from 'components/loding/Loading';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useMutation, useQuery } from 'react-query';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { categoryList, categorySave } from 'utils/axios';
import Register from './Register';

const Category = () => {
    const nav = useNavigate();
    const [category, setCategory] = useState();
    const [categorys, setcategorys] = useState([]);
    const result = useQuery("categoryList", categoryList);
    const { mutateAsync, isLoading } = useMutation(categorySave);

    useEffect(() => {
        // setcategorys(result.data);
    }, [])

    const createCategory = () => {
        let arr = categorys;
        let index = categorys.length + 1;
        setcategorys([...arr, { cateCode: index * 10, categoryName: category, lowCategory: [] }]);
        setCategory("");
        nav("/admin/Category");
    }

    const createLowCategory = (index) => {
        let arr = categorys;
        arr[index].lowCategory.push({
            cateCode: (arr[index].cateCode * 100) + ((arr[index].lowCategory.length + 1) * 10),
            categoryName: category
        })
        setcategorys([...arr]);
        setCategory("");
        nav("/admin/Category");
    }

    const deleteCategory = (index) => {
        let arr = categorys;
        arr.splice(index, 1);
        for (let i = 0; i < arr.length; i++) {
            const idx = i + 1;
            console.log(arr[i].lowCategory.length + 1);
            arr[i].cateCode = idx * 10;
            if (arr[i].lowCategory.length > 0) {
                for (let j = 0; j < arr[i].lowCategory.length; j++) {
                    arr[i].lowCategory[j].cateCode = (idx * 1000) + ((j + 1) * 10);
                }
            }
        }
        setcategorys([...arr]);
    }

    const deleteLowCategory = (index, lowIndex) => {
        let arr = categorys;
        arr[index].lowCategory.splice(lowIndex, 1);
        if (arr[index].lowCategory.length > 0) {
            for (let i = 0; i < arr[index].lowCategory.length; i++) {
                arr[index].lowCategory[i].cateCode = ((arr[index].cateCode) * 100) + ((i + 1) * 10);
            }
        }
        setcategorys([...arr]);
    }

    const updateCategory = (index) => {
        let arr = categorys;
        arr[index].categoryName = category;
        setCategory("");
        nav("/admin/Category");
    }

    const updateLowCategory = (index, lowIndex) => {
        let arr = categorys;
        arr[index].lowCategory[lowIndex].categoryName = category;
        setCategory("");
        nav("/admin/Category");
    }

    const onSubmit = (e) => {
        e.preventDefault();
        mutateAsync(categorys);
    }

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        switch (name) {
            case "registerCate":
                setCategory(value);
                break;
            default:
                break;
        }
    }

    return (
        <>
            <Top title={"카테고리"} buttonTitle={"카테고리 추가"} buttonLink={"registerCate"} />
            <Save onClick={onSubmit}>저장</Save>
            <Padding>
                {
                    categorys.map((a, i) => {
                        return (
                            <Container key={i}>
                                <Flex>
                                    <CateInfo>
                                        <li>분류코드 : {a.cateCode}</li>
                                        <li>카테고리명 : {a.categoryName}</li>
                                    </CateInfo>
                                    <Buttons>
                                        <Link to={`registerLowCate?index=${i}`}>추가</Link>
                                        <button onClick={() => { deleteCategory(i) }}>삭제</button>
                                        <Link to={`updateCate?index=${i}`}>수정</Link>
                                    </Buttons>
                                </Flex>
                                {
                                    a.lowCategory?.map((b, j) => {
                                        return (
                                            <Container key={j}>
                                                <Flex>
                                                    <CateInfo>
                                                        <li>분류코드 : {b.cateCode}</li>
                                                        <li>카테고리명 : {b.categoryName}</li>
                                                    </CateInfo>
                                                    <Buttons>
                                                        <button onClick={() => { deleteLowCategory(i, j) }}>삭제</button>
                                                        <Link to={`updateLowCate?index=${i}&lowIndex=${j}`}>수정</Link>
                                                    </Buttons>
                                                </Flex>
                                            </Container>
                                        )
                                    })
                                }
                            </Container>
                        )
                    })
                }
            </Padding>

            <Routes>
                <Route path="registerCate" element={
                    <Register onChange={onChange} category={createCategory} title="카테고리 추가" />
                }></Route>
                <Route path="registerLowCate" element={
                    <Register onChange={onChange} category={createLowCategory} title="카테고리 추가" />
                }></Route>
                <Route path="updateCate" element={
                    <Register onChange={onChange} category={updateCategory} title="카테고리 수정" />
                }></Route>
                <Route path="updateLowCate" element={
                    <Register onChange={onChange} category={updateLowCategory} title="카테고리 수정" />
                }></Route>
            </Routes>

            {isLoading && <Loading />}
        </>
    );
};

const Save = styled.div`
    position: fixed;
    bottom: 15px;
    right: 15px;
    background-color: #1a6dff;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    cursor: pointer;
`

const Padding = styled.div`
    padding: 0px 15px;
`

const Container = styled.div`
    background-color: #fff;
    border-radius: 5px;
    padding: 15px;
    box-shadow: 2px 2px 6px 0 #00000044;
    margin: 15px 0px;
`

const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-content: center;
    gap: 10px;
`

const CateInfo = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
    li{
        width: 100%;
        background-color: #f5f5f5;
        padding: 10px;
        font-size: 18px;
        border-radius: 5px;
    }
`

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    *{
        line-height: 24px;
        background-color: #1a6dff;
        color: #fff;
        padding: 0px 15px;
        border-radius: 5px;
        cursor: pointer;
        text-align: center;
        white-space: nowrap;
    }
`

export default Category;