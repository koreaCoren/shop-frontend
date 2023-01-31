import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { order } from 'utils/axios';

import * as Style from "assets/styleComponent/myPage/order"

const Order = ({ }) => {


    return (
        <Style.Div>
            <div className='subTitle'>
                <h2>주문 내역</h2>
                <div className='grayTitle'>최대 지난 3년간의 주문 내역까지 확인할 수 있어요</div>
                <div className='new'>3개월</div>
            </div>
            <div className='contents'>
                <div className='column'></div>
            </div>
        </Style.Div>
    );
};
export default Order;