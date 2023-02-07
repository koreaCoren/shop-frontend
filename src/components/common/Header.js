import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { categoryList, logout } from 'utils/axios';
import Loading from 'components/loding/Loading';

import styled from 'styled-components';

import logo from "assets/images/logo.png"

const Header = () => {
    const [categorys, setCategorys] = useState([]);
    const result = useQuery("categoryList", categoryList);

    useEffect(() => {
        setCategorys(result.data);
    }, [result.isLoading])

    return (
        <header style={{ boxShadow: "0px 0px 5px #00000033" }}>
            <Login>
                <div className="wrap">
                    {
                        sessionStorage.getItem("loginCheck") === "success"
                            ? <ul>
                                <li><h2>{sessionStorage.getItem("userId")}님 로그인중</h2></li>
                                <li style={{ cursor: "pointer" }} onClick={logout}>로그아웃</li>
                                <li><Link to={"/product/basket"}>장바구니</Link></li>
                                {
                                    sessionStorage.getItem("userId")
                                    && <li><Link to={"myPage/order"}>마이페이지</Link></li>
                                }
                                {
                                    sessionStorage.getItem("userId") === "admin"
                                        || sessionStorage.getItem("userId") === "pkd"
                                        || sessionStorage.getItem("userId") === "asd"
                                        ? <li><Link to={"admin"}>관리자</Link></li>
                                        : null
                                }
                            </ul>
                            : <ul>
                                <li><Link to={"login"}>로그인</Link></li>
                                <li><Link to={"loginRegister"}>회원가입</Link></li>
                                <li><Link to={"/product/basket"}>장바구니</Link></li>
                            </ul>
                    }
                </div>
            </Login>

            <Head>
                <div className="wrap">
                    <div className="flexBox">
                        <a href="/"><h1><img src={logo} alt="" /></h1></a>
                        <nav>
                            <ul>
                                {
                                    categorys?.map((a, i) => {
                                        return (
                                            <li key={i}>
                                                <Link to={`/product/products/${(a.cate_code)}`}>{a.cate}</Link>
                                                <ol>
                                                    {
                                                        a.lowCategory?.map((b, j) => {
                                                            return (
                                                                <li key={j}><Link to={`/product/products/${b.cate_code}`}>{b.cate}</Link></li>
                                                            )
                                                        })
                                                    }
                                                </ol>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </nav>
                    </div>
                </div>
            </Head>

            {result.isLoading && <Loading />}
        </header>
    );
};

const Login = styled.div`
    border-bottom: 1px solid #ccc;
    ul{
        display: flex;
        justify-content: end ;
        gap: 15px;
        li{
            padding: 10px 0px;
        }
    }
    @media (max-width: 1200px) {
        padding: 0px 15px;
    }
`
const Head = styled.div`
    background-color: #fff;
    a > h1 > img{
        width: 100px;
    }
    nav ul li{
        position: relative;
    }

    nav ul > li > a{
        font-size: 18px;
        padding: 0px 15px;
        line-height: 50px;
    }

    nav ul li ol{
        position: absolute;
        top: 90%;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: 1px 1px 2px #00000077;
        background-color: #fff;
        max-height: 0px;
        overflow-y: hidden;
        transition: max-height .5s;
        z-index: 5;
    }

    nav ul li:hover ol{
        max-height: 300px;
    }

    nav ul  li ol li{
    }

    nav ul li ol li:hover{
        background-color: #eee;
    }

    nav ul li ol li a{
        font-size: 16px;
        white-space:nowrap;
        line-height: 40px;
        padding: 0px 10px;
    }
`


export default Header;