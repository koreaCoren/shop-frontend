import React from 'react';
import styled from 'styled-components';
import LinkButton from 'components/admin/product/button/LinkButton';

const Top = ({ title, buttonLink, buttonTitle }) => {
    return (
        <Div>
            <h1>{title}</h1>
            <ul>
                <li ><LinkButton link={buttonLink} title={buttonTitle} /></li>
            </ul>
        </Div>
    );
};
const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    box-shadow: 0px 0px 7px 0 #00000055;
    padding: 10px 15px;
`;

export default Top;