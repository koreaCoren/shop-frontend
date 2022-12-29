import List from 'pages/product/List';
import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Main = ({ setHeader }) => {
    useEffect(() => {
        setHeader(true);
    }, [])
    return (
        <main>
            <List></List>
        </main>
    );
};

export default Main;