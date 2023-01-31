import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from "react-query";
import { tokenCheck, logout } from 'utils/axios';
import styled from 'styled-components';

const Header = () => {
    return (
        <header>
            <Login>
                <div className="wrap">
                    {
                        sessionStorage.getItem("loginCheck") === "success"
                            ? <ul>
                                <li><h2>{sessionStorage.getItem("userId")}님 로그인중</h2></li>
                                <li style={{ cursor: "pointer" }} onClick={logout}>로그아웃</li>
                                {
                                    sessionStorage.getItem("userId")
                                        ? <li><Link to={"myPage"}>마이페이지</Link></li>
                                        : null
                                }
                                {
                                    sessionStorage.getItem("userId") === "admin" || sessionStorage.getItem("userId") === "pkd"
                                        ? <li><Link to={"admin"}>관리자</Link></li>
                                        : null
                                }
                            </ul>
                            : <ul>
                                <li><Link to={"login"}>로그인</Link></li>
                                <li><Link to={"loginRegister"}>회원가입</Link></li>
                            </ul>
                    }
                </div>
            </Login>

            <Head>
                <div className="wrap">
                    <div className="flexBox">
                        <a href="/"><h1>로고</h1></a>
                        <nav>
                            <ul>
                                <li><a href="#">메뉴1</a></li>
                                <li><a href="#">메뉴2</a></li>
                                <li><a href="#">메뉴3</a></li>
                                <li><a href="#">메뉴4</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </Head>
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

export default Header;