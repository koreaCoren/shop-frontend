import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { menus } from './data';

const SideMenu = () => {
    const [isMenu, setIsMenu] = useState(false);
    const [menuList, setMenuList] = useState(0);
    return (
        <Ul>
            <li><a href="/">PKD ADMIN</a></li>
            <li><Link to={"/admin"}><i className="fa-solid fa-house"></i>홈</Link></li>
            {
                menus.map((a, i) => {
                    return (
                        <li key={i}
                            onClick={() => {
                                setMenuList(i);
                                setIsMenu(true);
                                menuList === i && setIsMenu(!isMenu)
                            }}>
                            <span><i className="fa-solid fa-gift"></i>{a.mainTitle}</span>
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
                    )
                })
            }

        </Ul >
    );
};

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    background-color: #333;
    height: 100%;
    > li{
        cursor: pointer;
    }
    > li:nth-child(1){
        border-bottom: 1px solid #999;
    }
    > li:nth-child(1) > a{
        color: #fff;
        line-height: 40px;
        padding: 0px 15px;
    }
    > li:not(:nth-child(1)) > a{
        color: #fff;
        padding: 15px;
        width: 100%;
    }
    > li span{
        color: #fff;
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
`

export default SideMenu;