import React from 'react';
import { useQuery } from 'react-query';
import { order } from 'utils/axios';

const OrderComplete = () => {
    let result = useQuery("order", order);
    return (
        <>ㅁㄴㅇㅁㄴㅇ</>
    );
};

export default OrderComplete;