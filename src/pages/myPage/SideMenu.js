import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { menus } from '../../components/myPage/data';

const SideMenu = () => {
    const [isMenu, setIsMenu] = useState(false);
    const [menuList, setMenuList] = useState(0);
    return (
        <Ul>
            <li><a href="/myPage/order">마이페이지</a></li>
            {
                menus.map((a, i) => {
                    return (
                        a.subList.length !== 0
                            ? <li key={i}
                                onClick={() => {
                                    setMenuList(i);
                                    setIsMenu(true);
                                    menuList === i && setIsMenu(!isMenu)
                                }}>
                                <span><i className={a.icon}></i>{a.mainTitle}</span>
                                <ol
                                    className={
                                        isMenu === true
                                            ? menuList === i
                                                ? "on"
                                                : ""
                                            : ""
                                    }
                                >
                                    {
                                        a.subList.map((b, j) => {
                                            return (
                                                <li key={j}><Link to={b.url}>{b.title}</Link></li>
                                            )
                                        })
                                    }
                                </ol>
                            </li>
                            : <li key={i}>
                                <Link to={a.url}>
                                    <i className={a.icon}></i>{a.mainTitle}
                                </Link>
                            </li>
                    )
                })
            }

        </Ul >
    );
};

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    height: 100%;
    > li{
        cursor: pointer;        
        padding: 5px;
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
    ol{
        background-color: #555;
        overflow: hidden;
        max-height: 0px;
        transition: max-height .5s, padding .5s;
    }
    ol.on{
        max-height: 80px;
        padding: 10px 0px;
    }
    ol > li{
        display: block;
        padding: 0px 15px;
    }
    ol > li > a{
        color: #fff;
        font-size: 12px;
        line-height: 2;
    }
    i {
        width: 20px;
    }
`

export default SideMenu;