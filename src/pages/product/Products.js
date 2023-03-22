import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams, Link } from 'react-router-dom';

import Loading from 'components/loding/Loading';
import Searching from 'components/board/Searching';
import Pageing from 'components/board/Pageing';

import * as Style from "assets/styleComponent/product/products";

import banner from "assets/images/shop/banner.jpg";
import noImg from "assets/images/noImg.gif";

const Products = ({ result }) => {
    const COUNT = 12;
    const nav = useNavigate();
    const { categoryCode, boardPage } = useParams();
    const [productList, setProductList] = useState();
    const [select, setSelect] = useState("최신순");

    const compareDates = (a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        if (select === "최신순") {
            if (dateA < dateB) {
                return 1;
            } else if (dateA > dateB) {
                return -1;
            } else {
                return 0;
            }
        } else if (select === "오래된순") {
            if (dateA > dateB) {
                return 1;
            } else if (dateA < dateB) {
                return -1;
            } else {
                return 0;
            }
        }
    }

    const sortData = () => {
        if (select === "비싼 가격순") {
            const sorted = [...productList].sort((a, b) => Number(b.goods_price) - Number(a.goods_price));
            setProductList(sorted);
        } else if (select === "낮은 가격순") {
            const sorted = [...productList].sort((a, b) => Number(a.goods_price) - Number(b.goods_price));
            setProductList(sorted);
        } else {
            const sorted = [...productList].sort(compareDates);
            setProductList(sorted);
        }
    }

    const reset = () => {
        const arr = [];
        for (let i = 0; i < result.data?.length; i++) {
            let getCateCode = String(result?.data[i].cate_code);
            if (getCateCode === categoryCode) {
                arr.push(result?.data[i]);
            } else if (getCateCode.substring(0, 2) === categoryCode) {
                arr.push(result?.data[i]);
            }
        }
        setProductList(arr);
        return arr;
    }

    useEffect(() => {
        if (result.isLoading === false) {
            sortData();
        }
    }, [result.isLoading, select]);

    useEffect(() => {
        reset();
    }, [result.isLoading, nav]);

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        switch (name) {
            case "select":
                setSelect(value);
                break;
            default:
                break;
        }
    }

    return (
        <div style={{ paddingBottom: "50px", }}>
            <Style.Products>
                <div className='wrap'>
                    <div className="banner">
                        <img src={banner} alt="" />
                    </div>
                    <div className="flexBox" style={{ marginBottom: "20px" }}>
                        <Searching board={productList} setBoardList={setProductList} searchType={"product"} reset={reset} />
                        <Style.Select>
                            <select name="select" onChange={onChange}>
                                <option value="최신순">최신순</option>
                                <option value="오래된순">오래된순</option>
                                <option value="비싼 가격순">비싼 가격순</option>
                                <option value="낮은 가격순">낮은 가격순</option>
                            </select>
                            <i className="fa-solid fa-sort-down"></i>
                        </Style.Select>
                    </div>
                    <ul>
                        {
                            productList?.slice((boardPage - 1) * COUNT, (boardPage - 1) * 10 + COUNT).map((a, i) => {
                                return (
                                    <li key={i}>
                                        <Link to={`/product/detail/${a.goods_code}`}>
                                            <img src={a.goods_img === "" ? noImg : a.goods_img} alt="" />
                                            <h3>{a.goods_nm}</h3>
                                            <h4>{a.goods_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 원</h4>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </Style.Products>
            <Pageing count={COUNT} boardPage={boardPage} boardLength={productList?.length} url={`/product/products/${categoryCode}`} />
            {result.isLoading && <Loading />}
        </div>
    );
};

export default Products;