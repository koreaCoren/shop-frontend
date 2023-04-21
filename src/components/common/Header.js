import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';

import { categoryList, logout } from 'utils/axios';
import Loading from 'components/loding/Loading';

import styled from 'styled-components';

import logo from "assets/images/logo.png"

const Header = ({ user }) => {
    const nav = useNavigate();
    const [categorys, setCategorys] = useState([]);
    const [isMobileMenu, setIsMobileMenu] = useState(false);
    const [mobileMenuNum, setMobileMenuNum] = useState(0);
    const [isMenuBox, setIsMenuBox] = useState(false);
    const result = useQuery("categoryList", categoryList);

    useEffect(() => {
        setCategorys(result.data);
    }, [result.isLoading])

    useEffect(() => {
        setIsMobileMenu(false);
        setIsMenuBox(false);
    }, [nav])

    return (
        <header style={{ boxShadow: "0px 0px 5px #00000033" }}>
            <Login>
                <div className="wrap">
                    {
                        user?.result === "ok"
                            ? <ul>
                                <li><h2>{sessionStorage.getItem("userId")}님 로그인중</h2></li>
                                <li style={{ cursor: "pointer" }} onClick={logout}>로그아웃</li>
                                <li><Link to={"product/basket"}>장바구니</Link></li>
                                <li><Link to={"myPage/order/1"}>마이페이지</Link></li>
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
                                <li><Link to={"product/basket"}>장바구니</Link></li>
                            </ul>
                    }
                </div>
            </Login>

            <Head>
                <div className="wrap">
                    <div className="flexBox">
                        <a href="/"><h1><img src={logo} alt="" /></h1></a>
                        <nav className='pc'>
                            <ul>
                                {
                                    categorys?.map((a, i) => {
                                        return (
                                            <li key={i}>
                                                <Link to={`/product/products/${(a.cate_code)}/1`}>{a.cate}</Link>
                                                <ol>
                                                    {
                                                        a.lowCategory?.map((b, j) => {
                                                            return (
                                                                <li key={j}><Link to={`/product/products/${b.cate_code}/1`}>{b.cate}</Link></li>
                                                            )
                                                        })
                                                    }
                                                </ol>
                                            </li>
                                        )
                                    })
                                }
                                <li><Link to={"community/review/all/1"}>리뷰보기</Link></li>
                                <li><Link to={"community/notice/1"}>공지사항</Link></li>
                            </ul>
                        </nav>

                        <div className="mobile">
                            <button onClick={() => { setIsMenuBox(!isMenuBox) }}>
                                <i className="fa-solid fa-bars"></i>
                            </button>

                            <div className={
                                isMenuBox === true
                                    ? "menuBox on"
                                    : "menuBox"
                            }>
                                {
                                    user?.result === "ok"
                                        ? <ul className='user flexBox'>
                                            <li>{sessionStorage.getItem("userId")}님 로그인중</li>
                                            <li onClick={logout}>로그아웃</li>
                                        </ul>
                                        : <ul className='user flexBox'>
                                            <li><Link to={"login"}>로그인</Link></li>
                                            <li><Link to={"loginRegister"}>회원가입</Link></li>
                                        </ul>
                                }

                                <ul className='nav'>
                                    <li>
                                        <Link to={"product/basket"}>
                                            <i className="fa-solid fa-basket-shopping"></i>
                                            장바구니
                                        </Link>
                                    </li>
                                    {
                                        user?.result === "ok"
                                        && <li>
                                            <Link to={"myPage/order/1"}>
                                                <i className="fa-solid fa-user"></i>
                                                마이페이지
                                            </Link>
                                        </li>
                                    }
                                </ul>

                                <ul className='menu'>
                                    {
                                        categorys?.map((a, i) => {
                                            return (
                                                <li key={i}>
                                                    {
                                                        a.lowCategory.length <= 0
                                                            ? <Link to={`/product/products/${(a.cate_code)}/1`}>{a.cate}</Link>
                                                            : <span
                                                                onClick={() => {
                                                                    setIsMobileMenu(!isMobileMenu);
                                                                    setMobileMenuNum(i);
                                                                }}
                                                            >{a.cate}</span>
                                                    }
                                                    <ol style={
                                                        isMobileMenu === true
                                                            ? mobileMenuNum === i
                                                                ? { maxHeight: `${a.lowCategory.length * 40}px` }
                                                                : { maxHeight: `0px` }
                                                            : { maxHeight: `0px` }
                                                    }>
                                                        {
                                                            a.lowCategory?.map((b, j) => {
                                                                return (
                                                                    <li key={j}><Link to={`/product/products/${b.cate_code}/1`}>{b.cate}</Link></li>
                                                                )
                                                            })
                                                        }
                                                    </ol>
                                                </li>
                                            )
                                        })
                                    }
                                    <li><Link to={"community/review/all/1"}>리뷰보기</Link></li>
                                    <li><Link to={"community/notice/1"}>공지사항</Link></li>
                                </ul>
                            </div>
                        </div>
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
        display: none;
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
        width: 100%;
    }

    nav ul li ol li:hover{
        background-color: #eee;
    }

    nav ul li ol li a{
        width: 100%;
        font-size: 16px;
        white-space:nowrap;
        line-height: 40px;
        padding: 0px 10px;
        text-align: center;
    }

    .mobile button i{
        font-size: 24px;
        cursor: pointer;
        line-height: 50px;
    }

    .mobile .menuBox{
        position: fixed;
        top: 0;
        left: 0;
        background-color: #fff;
        width: 250px;
        max-width : 0px;
        overflow: hidden;
        transition: max-width .3s, opacity .2s;
        height: 100vh;
        z-index: 10;
        opacity: 0;
        box-shadow: -2px -2px 8px #00000077;
    }

    .mobile .menuBox.on{
        opacity: 1;
        max-width: 250px;
    }

    .mobile .menuBox ul.user{
        padding: 10px 5px;
        border-bottom: 1px solid #ccc;
    }

    .mobile .menuBox ul.user li{
        white-space: nowrap;
    }

    .mobile .menuBox ul.nav{
        display: flex;
    }

    .mobile .menuBox ul.nav li{
        flex: 1;
        text-align: center;
        padding: 10px 0px;
        border-bottom: 1px solid #ccc;
    }

    .mobile .menuBox ul.nav li a{
        display: flex;
        flex-direction: column;
        gap: 5px;
        white-space: nowrap;
    }

    .mobile .menuBox ul.nav li i{
        font-size: 20px;
    }

    .mobile .menuBox ul.nav li:nth-child(1){
        border-right: 1px solid #ccc;
    }

    .mobile .menuBox ul.menu{
        display: flex;
        flex-direction: column;
    }

    .mobile .menuBox ul.menu li{
        width: 100%;
    }

    .mobile .menuBox ul.menu > li > span,
    .mobile .menuBox ul.menu > li > a{
        display: inline-block;
        width: 100%;
        border-bottom: 1px solid #ccc;
        text-align: center;
        line-height: 40px;
        white-space: nowrap;
        cursor: pointer;
    }

    .mobile .menuBox ul.menu > li > ol{
        background-color: #eee;
        max-height: 0px;
        overflow: hidden;
        transition: max-height .5s;
    }

    .mobile .menuBox ul.menu > li > ol > li{
        width: 100%;
    }

    .mobile .menuBox ul.menu > li > ol > li > a{
        text-align: center;
        line-height:40px;
        width: 100%;
        white-space: nowrap;
    }

    .mobile .menuBox ul.menu > li > ol > li:not(:last-child) > a{
        border-bottom: 1px solid #ccc;
    }

`


export default Header;