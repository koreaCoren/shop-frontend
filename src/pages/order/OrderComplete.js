import React, { useState } from 'react';
import { useEffect } from 'react';
import { useMutation } from 'react-query';

import { orderSuccess } from 'utils/axios';
import Loading from 'components/loding/Loading';

import * as Style from 'assets/styleComponent/order/orderComplete'

const OrderComplete = () => {
    const [success, setSuccess] = useState();
    const { mutateAsync, isLoading, isSuccess } = useMutation(orderSuccess);

    const getSuccsssData = async () => {
        const location = window.location;
        const params = new URLSearchParams(location.search);
        const data = {
            orderCode: params.get("orderCode"),
        };

        await mutateAsync(data);
        setSuccess(data.result);
    }

    useEffect(() => {
        getSuccsssData();
    }, [])

    return (
        <>
            {
                isSuccess &&
                <Style.Content>
                    <i className="fa-solid fa-gift"></i>
                    <h2>고객님, 주문이 완료되었습니다.</h2>
                    <p>
                        고객님이 주문하신 주문번호는 <br />
                        <span>{success.orderCode}</span> 입니다.
                    </p>
                    <p>
                        주문내역 확인은  <br />
                        "주문/배송조회" 에서 하실 수 있습니다.
                    </p>
                </Style.Content>
            }
            {isLoading && <Loading />}
        </>
    );
};

export default OrderComplete;