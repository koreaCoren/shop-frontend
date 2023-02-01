import React, { useEffect } from 'react';
import { useQuery } from 'react-query';

import { orderManagement } from 'utils/axios';
import Top from 'components/admin/Top';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const OrderDetail = () => {
    const { orderCode } = useParams();
    const result = useQuery("orderManagement", orderManagement);
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        if (result.isLoading === false) {
            let arr = [];
            for (let i = 0; i < result.data.length; i++) {
                if (result.data[i].orderCode === orderCode) {
                    arr.push(result.data[i]);
                    setDetail(arr);
                }
            }
        }
    }, [result.isLoading])
    return (
        <>
            <Top title={"주문 상세보기"} isButton={false} />
            <div>
                {
                    detail?.map((a, i) => {
                        return (
                            <div key={i}>{a.orderCode}</div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default OrderDetail;