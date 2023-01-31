import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { order } from 'utils/axios';
import bgImg from "../../assets/images/myPage.jpg";

import * as Style from "assets/styleComponent/myPage/myPage"

const Banner = ({ }) => {


    return (
        <Style.Slide>
            <img src={bgImg} alt="" />
        </Style.Slide>
    );
};
export default Banner;