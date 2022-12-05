import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from "react-query";
import { tokenCheck, logout } from 'utils/axios';
import styled from 'styled-components';

const Header = () => {
    const nav = useNavigate();
    const { mutate, isLoading } = useMutation(tokenCheck);

    useEffect(() => {
        const data = {
            token: sessionStorage.getItem("token"),
            userId: sessionStorage.getItem("userId"),
        }
        mutate(data);
    }, [nav])
    return (
        <Head>
            <div className="wrap">
                <div className="flexBox">
                    <h1><a href="/">PKD</a></h1>
                    {
                        sessionStorage.getItem("loginCheck") === "success"
                            ? <ul>
                                <li><h2>{sessionStorage.getItem("userId")}님 로그인중</h2></li>
                                <li style={{ cursor: "pointer" }} onClick={logout}>로그아웃</li>
                                {
                                    sessionStorage.getItem("userId") === "admin"
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
            </div>
        </Head>
    );
};

const Head = styled.header`
    background-color: #eee;
    h1 a{
        line-height: 40px;
    }
    ul{
        display: flex;
        gap: 15px;
    }
    @media (max-width: 1200px) {
        padding: 0px 15px;
    }
`

export default Header;