import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { order } from 'utils/axios';
import bgImg from "../../assets/images/myPage.jpg";

import styled from 'styled-components';

const Banner = ({ }) => {


    return (
        <Slide>
            <img src={bgImg} alt="" />
        </Slide>
    );
};

const Slide = styled.div`
    height: 350px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    img{
        width: 1200px;
        height: 300px;
        padding: 10px 0;
    }
`

export default Banner;