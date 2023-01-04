import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <Foot>
            푸터~~
        </Foot>
    )
};
const Foot = styled.footer`
    background-color: #aaa;
    height: 200px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
`

export default Footer;