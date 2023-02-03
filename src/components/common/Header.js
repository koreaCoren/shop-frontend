import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { categoryList, logout } from 'utils/axios';
import Loading from 'components/loding/Loading';

import styled from 'styled-components';

const Header = () => {
    const [categorys, setCategorys] = useState([]);
    const result = useQuery("categoryList", categoryList);

    useEffect(() => {
        setCategorys(result.data);
    }, [result.isLoading])

    return (
        <header>
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
                        <a href="/"><h1>로고</h1></a>
                        <nav>
                            <TopMenu>
                                {
                                    categorys?.map((a, i) => {
                                        return (
                                            <li key={i}>
                                                <Link to={`/product/products/${(i + 1)}0`}>{a.cate}</Link>
                                                <ol>
                                                    {
                                                        a.lowCategory?.map((b, j) => {
                                                            return (
                                                                <li key={j}><Link to={`/product/products/${(i + 1)}0${(j + 1)}0`}>{b.cate}</Link></li>
                                                            )
                                                        })
                                                    }
                                                </ol>
                                            </li>
                                        )
                                    })
                                }
                            </TopMenu>
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
    background-color: #eee;
    nav ul li a{
        padding: 15px;
        margin: 0px 10px;
    }
`

const TopMenu = styled.ul`
    li{
        
    }
    li a{
        font-size: 20px;
    }
    li ol{
        display: none;
    }
    li:hover ol{
        display: block;
        position: absolute;
    }
    li ol li{
        display: block;
        background-color: white;
    }
    li ol li:hover{
        background-color: rgb(240,240,240);
    }
    li ol li a{
        font-size: 18px;
    }
    
`


export default Header;