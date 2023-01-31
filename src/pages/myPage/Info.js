import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { order } from 'utils/axios';

import * as Style from "assets/styleComponent/myPage/myPage"

const Info = ({ }) => {


    return (
        <Style.Slide>개인 정보 수정</Style.Slide>
    );
};
export default Info;