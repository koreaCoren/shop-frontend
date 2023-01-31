import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { order } from 'utils/axios';

import * as Style from "assets/styleComponent/myPage/pick"

const Pick = ({ }) => {


    return (
        <Style.Div>
            <div className='subTitle'>
                <h2>찜한 상품</h2>
                <div className='grayTitle'>찜한 상품은 최대 200개까지 표시가 됩니다.</div>
            </div>
            <div className='contents'>
                <div className='column'></div>
            </div>
        </Style.Div>
    );
};
export default Pick;