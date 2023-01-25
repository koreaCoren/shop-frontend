import React from 'react';
import { useEffect } from 'react';
import * as Style from "assets/styleComponent/main/main"

import MainProductList from 'pages/main/MainProductList';

const Main = ({ setHeader }) => {
    useEffect(() => {
        setHeader(true);
    }, []);
    return (
        <main>
            <Style.Slide>배너~~~~</Style.Slide>
            <div className="wrap">
                <MainProductList></MainProductList>
            </div>
        </main>
    );
};


export default Main;