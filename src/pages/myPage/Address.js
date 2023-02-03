import React, { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import { address } from 'utils/axios';

import * as Style from "assets/styleComponent/myPage/myPage"
import * as AddressStyle from "assets/styleComponent/myPage/address"

const Address = ({ }) => {
    const [list, setBoard] = useState();
    const { mutateAsync, isSuccess } = useMutation(address);

    const getOrderData = async () => {
        const data = {
            userId: sessionStorage.getItem('userId'),
            token: sessionStorage.getItem("token")
        };
        await mutateAsync(data);
        setBoard(data.result);
        console.log(data.result.user_addr);
    }

    useEffect(() => {
        getOrderData();
    }, [])

    return (
        <Style.InDiv>
            <div className='subTitle'>
                <div>
                    <h2>배송지 관리</h2>
                    <div className='grayTitle'>배송지에 따라 상품유형 및 배송정보가 달라질 수 있습니다.</div>
                </div>
                <div className='new'>+ 새 배송지 추가</div>
            </div>
            {

                isSuccess &&

                <div className='contents'>

                </div>


            }

        </Style.InDiv>

    );
};
export default Address;