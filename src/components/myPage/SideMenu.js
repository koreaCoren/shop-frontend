import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SideMenu = () => {
    const nav = useNavigate();
    const location = useLocation();
    const [url, setUrl] = useState(0);
    useEffect(() => {
        const regexArr = [/.*order.*/, /.*address.*/, /.*review.*/, /.*personalModify.*/]
        for (let i = 0; i < regexArr.length; i++) {
            if (regexArr[i].test(location.pathname)) {
                setUrl(i);
            }
        }
    }, [nav])
    return (
        <Ul>
            <li><Link to="/myPage/order/1">마이페이지</Link></li>
            <li className={url === 0 ? "on" : ""}><Link to="/myPage/order/1"><i className='fa-solid fa-file-invoice-dollar'></i>주문내역</Link></li>
            <li className={url === 1 ? "on" : ""}><Link to="/myPage/address"><i className='fa-solid fa-truck'></i>기본 배송지 관리</Link></li>
            <li className={url === 2 ? "on" : ""}><Link to="/myPage/review"><i className='fa-solid fa-star'></i>상품 후기 작성</Link></li>
            <li className={url === 3 ? "on" : ""}><Link to="/myPage/personalModify"><i className='fa-solid fa-house'></i>개인 정보 수정</Link></li>
        </Ul>
    );
};

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 5px;
    height: 100%;
    > li{
        cursor: pointer;        
        padding: 5px;
    }
    li.on{
        background-color: #333;
    }
    li.on a{
        color: #fff;
    }
    li.on i{
        color: #fff;
    }
    > li:not(:first-child){
        border: 1px solid #DDDFE170;
    }
    > li:nth-child(1) > a{
        line-height: 40px;
        padding: 15px;
        font-size: 24px;
    }
    > li:not(:nth-child(1)) > a{
        padding: 15px;
        width: 100%;
    }
    > li span{
        padding: 15px 15px;
        display: inline-block;
    }
    > li span > i,
    > li a > i{
        margin-right: 10px;
        color: #999;
    }
    i {
        width: 20px;
    }
`

export default SideMenu;