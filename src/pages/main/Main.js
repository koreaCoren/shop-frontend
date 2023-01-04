import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import MainProductList from 'pages/main/MainProductList';

const Main = ({ setHeader }) => {
    useEffect(() => {
        setHeader(true);
    }, [])
    return (
        <main>
            <Slide>배너~~~~</Slide>
            <div className="wrap">
                <MainProductList></MainProductList>
            </div>
        </main>
    );
};

const Slide = styled.div`
    background-color: #aaa;
    height: 350px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 60px;
`

export default Main;