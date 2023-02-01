import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { order } from 'utils/axios';

import * as Style from "assets/styleComponent/myPage/myPage"

const Address = ({ }) => {


    return (
        <Style.InDiv>
            <div className='subTitle'>
                <div>
                    <h2>배송지 관리</h2>
                    <div className='grayTitle'>배송지에 따라 상품유형 및 배송정보가 달라질 수 있습니다.</div>
                </div>
                <div className='new'>+ 새 배송지 추가</div>
            </div>
            <div className='contents'>
                <div className='column'></div>
            </div>
        </Style.InDiv>

    );
};
export default Address;