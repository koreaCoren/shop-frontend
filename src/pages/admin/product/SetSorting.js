import React, { useEffect, useState } from 'react';
import ProductSelect from 'components/admin/product/input/Select';

import { getCategory } from 'api/category';
import { getProdcut, setProudctSorting } from 'api/product';

import * as Common from "assets/styleComponent/admin/common"
import * as Style from "assets/styleComponent/admin/product/sorting"

const SetSorting = () => {
    const [cate01, setCate01] = useState("");
    const [cate02, setCate02] = useState("");
    const [firstCategory, setFirstCategory] = useState([]);
    const [secondCategory, setSecondCategory] = useState([]);
    const [sorting, setSorting] = useState("선택해주세요");
    const [productList, setProductList] = useState(null);

    useEffect(() => {
        getCategory(setFirstCategory);
    }, [])

    useEffect(() => {
        // 카테고리 1번 선택하면 2번에 카테고리 1번 하위 카테고리 가져오기
        for (let i = 0; i < firstCategory.length; i++) {
            if (firstCategory[i].cate_code === Number(cate01)) {
                setSecondCategory(firstCategory[i].lowCategory);
            }
        }
    }, [cate01])

    const onSubmit = (e) => {
        e.preventDefault();

        if (cate01 === "선택해주세요" || cate01 === "") {
            alert("카테고리 1번 선택해주세요");
            window.location.reload();
            return;
        }

        const data = {
            cate_code: cate02 === "" || cate02 === "선택해주세요" ? cate01 : cate02,
        }

        switch (sorting) {
            case "판매량 많은 순":
                data.sort_type = "goods_sell";
                data.direction = "desc";
                break;
            case "판매량 적은 순":
                data.sort_type = "goods_sell";
                data.direction = "asc";
                break;
            case "재고 많은 순":
                data.sort_type = "goods_stock";
                data.direction = "desc";
                break;
            case "재고 적은 순":
                data.sort_type = "goods_stock";
                data.direction = "asc";
                break;

            default:
                break;
        }

        setProudctSorting(data);
    }

    const manualSorting = () => {
        if (cate01 === "선택해주세요" || cate01 === "") {
            alert("카테고리 1번 선택해주세요");
            window.location.reload();
            return;
        }

        const data = {
            cate_code: cate02 === "" || cate02 === "선택해주세요" ? cate01 : cate02,
        }

        getProdcut(data, setProductList);
    }

    const onChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        switch (name) {
            case "firstCategory":
                setCate01(value);
                setCate02("");
                setSecondCategory([]);
                break;
            case "secondCategory":
                setCate02(value);
                break;
            case "sorting":
                setSorting(value);
                if (value === "수동선택") {
                    manualSorting();
                }
                break;

            default:
                break;
        }
    };
    return (
        <>
            <Common.Container>
                <Style.H2>정렬 설정</Style.H2>
                <ProductSelect title="카테고리 1번" type="text" name="firstCategory" placeholder="상품이름" onChange={onChange} option={firstCategory} value={cate01} />
                <ProductSelect title="카테고리 2번" type="text" name="secondCategory" placeholder="상품이름" onChange={onChange} option={secondCategory} value={cate02} />
                <Style.Box>
                    <span>정렬방식 선택</span>
                    <div>
                        <div>
                            <select name="sorting" onChange={onChange}>
                                <option value="선택해주세요">선택해주세요</option>
                                <option value="판매량 많은 순">판매량 많은 순</option>
                                <option value="판매량 적은 순">판매량 적은 순</option>
                                <option value="재고 많은 순">재고 많은 순</option>
                                <option value="재고 적은 순">재고 적은 순</option>
                                <option value="수동선택">수동선택</option>
                            </select>
                            <i className="fa-solid fa-sort-down"></i>
                        </div>
                        {
                            sorting === "수동선택" || sorting === "선택해주세요"
                                ? null
                                : <button onClick={onSubmit}>저장</button>
                        }

                    </div>
                </Style.Box>
            </Common.Container>
            {
                productList !== null &&
                <Common.Container>
                    {
                        productList !== "not product"
                            ? productList[0].map((a, i) => {
                                return <div key={i}>{a.goods_nm}</div>
                            })
                            : "해당 카테고리는 상품이 없습니다."
                    }
                </Common.Container>
            }
        </>
    );
};

export default SetSorting;