import React, { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import { address } from 'utils/axios';

import * as Style from "assets/styleComponent/myPage/myPage"
import * as AddressStyle from "assets/styleComponent/myPage/address"

const Address = ({ }) => {
    const [list, setBoard] = useState();
    const { mutateAsync, isSuccess } = useMutation(address);

    const getAddrData = async () => {
        const data = {
            userId: sessionStorage.getItem('userId'),
            token: sessionStorage.getItem("token")
        };
        await mutateAsync(data);
        setBoard(data.result);
    }

    useEffect(() => {
        getAddrData();
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
                <AddressStyle.Contents>
                    <AddressStyle.Column>
                        <div className='flex60'>선택</div>
                        <div className='flex360'>주소</div>
                        <div className='flex120'>받으실 분</div>
                        <div className='flex100'>연락처</div>
                        <div className='flex60'>수정</div>
                    </AddressStyle.Column>


                    <AddressStyle.Ctnt>
                        <div className='flex60'><i className="fa-regular fa-circle-check"></i></div>
                        <div className='flex360'>{list.user_addr}</div>
                        <div className='flex120'>{list.user_nm}</div>
                        <div className='flex100'>{list.user_tel}</div>
                        <div className='flex60'><i className="fa-solid fa-pen"></i></div>
                    </AddressStyle.Ctnt>
                </AddressStyle.Contents>

            }

        </Style.InDiv >

    );
};
export default Address;