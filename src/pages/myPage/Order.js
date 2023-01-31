import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { order } from 'utils/axios';

import * as Style from "assets/styleComponent/myPage/myPage"

const Order = ({ }) => {


    return (
        <Style.Slide>주문 내역</Style.Slide>
    );
};
export default Order;