import React from 'react';
import LoadingImage from "assets/images/loading.gif";
import styled from 'styled-components';

const Loading = () => {
    return (
        <Div>
            <Img src={LoadingImage} />
        </Div>
    );
};

const Div = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    z-index: 100;
`

const Img = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 300px;
    z-index: 10;
`;

export default Loading;