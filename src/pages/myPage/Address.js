import React, { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import { address, insertAddress } from 'utils/axios';

import * as Style from "assets/styleComponent/myPage/myPage"
import * as AddressStyle from "assets/styleComponent/myPage/address"

const Address = ({ }) => {
    const id = sessionStorage.getItem("userId");
    const [list, setBoard] = useState();
    const [shipName, setShipName] = useState("");
    const [shipAddress, setShipAddress] = useState("");
    const [shipPhone, setShipPhone] = useState("");
    const [shipReceiver, setShipReceiver] = useState("");
    const [showShipping, setShowShipping] = useState(false);
    
    const { mutateAsync, isSuccess } = useMutation(address);
    const userShipAdd = useMutation(insertAddress);


    const getAddrData = async () => {
        const data = {
            userId: sessionStorage.getItem('userId'),
            token: sessionStorage.getItem("token")
        };
        await mutateAsync(data);
        setBoard(data.result);
        console.log(data.result);
    }

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        switch (name) {
            case "shipName":
                setShipName(value);
                console.log(value);
                break;
            case "shipAddress":
                setShipAddress(value);
                console.log(value);
                break;
            case "shipPhone":
                setShipPhone(value);
                console.log(value);
                break;
            case "shipReceiver":
                setShipReceiver(value);
                console.log(value);
                break;
            default:
                break;
        }
    }

    const showShipDiv = () => {
        showShipping === false ? setShowShipping(true) : setShowShipping(false);
    }

    const setShipping = async() => {
        const data = {
            user_id: id,
            ship_address: shipAddress,
            ship_name: shipName,
            ship_phone: shipPhone,
            ship_receiver: shipReceiver
        };
        await userShipAdd.mutateAsync(data);
        setShowShipping(false);
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
                <div className='new' onClick={showShipDiv}>+ 새 배송지 추가</div>
            </div>
            {showShipping && <AddressStyle.Shipping>
                <form>
                    <div>배송지명<input type="text" name='shipName' onChange={onChange}/></div> 
                    <div>주소<input type="text" name='shipAddress'onChange={onChange}/></div>
                    <div>받으실 분<input type="text" name='shipReceiver' onChange={onChange}/></div>
                    <div>연락처 <input type="text" name='shipPhone' onChange={onChange}/></div>
                    <div><input type="button" value="추가" onClick={() => {
                        setShipping();
                    }} /></div>
                    
                </form>
            </AddressStyle.Shipping>}
            
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