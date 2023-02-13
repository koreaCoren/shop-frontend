import React, { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import { address, insertAddress, deleteAddress, insDefaultAddr } from 'utils/axios';

import Loading from 'components/loding/Loading';
import DaumPost from 'components/daumPost/DaumPost';

import * as Style from "assets/styleComponent/myPage/myPage"
import * as AddressStyle from "assets/styleComponent/myPage/address"

const Address = ({ }) => {
    const id = sessionStorage.getItem("userId");
    const [list, setBoard] = useState("");
    const [shipName, setShipName] = useState("");
    const [shipAddress, setShipAddress] = useState("");
    const [shipPhone, setShipPhone] = useState("");
    const [shipReceiver, setShipReceiver] = useState("");
    const [showShipping, setShowShipping] = useState(false);
    const [insetAddress, setinsetAddress] = useState("");
    const [zoneCode, setZoneCode] = useState("");
    const [isPostOpen, setIsPostOpen] = useState(false);

    const destination = useMutation(address); // 배송지 불러오기
    const userShipAdd = useMutation(insertAddress); // 신규 배송지 추가
    const userShipDel = useMutation(deleteAddress); // 배송지 삭제
    const DefaultAddr = useMutation(insDefaultAddr); // 기본 배송지로 설정

    //새 배송지 추가시 보여줄 div
    const showShipDiv = () => {
        showShipping === false ? setShowShipping(true) : setShowShipping(false);
    }

    //유저 배송지 받기
    const getAddrData = async () => {
        const data = {
            userId: sessionStorage.getItem('userId'),
            token: sessionStorage.getItem("token")
        };
        await destination.mutateAsync(data);
        setBoard(data.result);
    }

    //배송지 추가
    const setShipping = async () => {
        const data = {
            user_id: id,
            ship_address: insetAddress,
            ship_detail_address: shipAddress,
            ship_name: shipName,
            ship_phone: shipPhone,
            ship_receiver: shipReceiver
        };
        await userShipAdd.mutateAsync(data);
        setShowShipping(false);
    }

    //배송지 삭제
    const delShpping = async (addrValue) => {
        if (window.confirm("정말로 삭제 하시겠습니까?")) {
            const data = {
                i_addr: addrValue
            }
            await userShipDel.mutateAsync(data);
        }
    }

    //기본 배송지 설정
    const setDefaultAddr = async (addrValue) => {
        const data = {
            user_id: id,
            i_addr: addrValue
        }
        await DefaultAddr.mutateAsync(data);
    }

    useEffect(() => {
        getAddrData();
    }, [])

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        switch (name) {
            case "shipName":
                setShipName(value);
                break;
            case "shipAddress":
                setShipAddress(value);
                break;
            case "shipPhone":
                setShipPhone(value);
                break;
            case "shipReceiver":
                setShipReceiver(value);
                break;
            default:
                break;
        }
    }

    return (
        <Style.InDiv>
            <div className='subTitle'>
                <div>
                    <h2>배송지 관리</h2>
                    <div className='grayTitle'>배송지에 따라 상품유형 및 배송정보가 달라질 수 있습니다.</div>
                </div>
                <div className='new' onClick={showShipDiv}>+ 새 배송지 추가</div>
            </div>
            {
                showShipping &&
                <AddressStyle.Shipping>
                    <form>
                        <div>
                            <span>배송지명</span>
                            <input type="text" name='shipName' onChange={onChange} /></div>
                        <div>
                            <span>주소</span>
                            <input
                                type="text"
                                readOnly
                                value={insetAddress === ""
                                    ? ""
                                    : insetAddress}
                                name='AddAddress' />
                        </div>
                        <div>
                            <span
                                onClick={() => {
                                    setIsPostOpen(true);
                                }}
                                className='pointer clickBox'>주소찾기</span>
                            <input
                                type="text"
                                name='shipAddress'
                                placeholder='상세주소'
                                onChange={onChange} />
                        </div>
                        {
                            isPostOpen &&
                            <DaumPost
                                setIsPostOpen={setIsPostOpen}
                                setZoneCode={setZoneCode}
                                setAddress={setinsetAddress}
                            ></DaumPost>
                        }
                        <div>
                            <span>받으실 분</span>
                            <input
                                type="text"
                                name='shipReceiver'
                                onChange={onChange} />
                        </div>
                        <div>
                            <span>연락처</span>
                            <input
                                type="text"
                                name='shipPhone'
                                onChange={onChange} />
                        </div>
                        <div className='btn'>
                            <input
                                className='pointer'
                                type="button"
                                value="추가"
                                onClick={() => {
                                    setShipping();
                                }} />
                        </div>
                    </form>
                </AddressStyle.Shipping>
            }

            {
                destination.isSuccess &&
                <AddressStyle.Contents>
                    <AddressStyle.Column>
                        <div className='flex60'>선택</div>
                        <div className='flex60'>배송지명</div>
                        <div className='flex360'>주소</div>
                        <div className='flex120'>받으실 분</div>
                        <div className='flex100'>연락처</div>
                        {/* <div className='flex60'>수정</div> */}
                        <div className='flex60'>삭제</div>
                    </AddressStyle.Column>

                    {
                        list.map((item, i) => {
                            return (
                                <AddressStyle.Ctnt key={i}>
                                    <div className='flex60'>
                                        <i className={(item.default_address === 1)
                                            ? "fa-regular fa-circle-check pointer"
                                            : "fa-regular fa-circle pointer"}
                                            onClick={() => {
                                                setDefaultAddr(item.i_addr);
                                            }}></i></div>
                                    <div className='flex60'>{item.ship_name}</div>
                                    <div className='flex360'>{item.ship_address} {item.ship_detail_address}</div>
                                    <div className='flex120'>{item.ship_receiver}</div>
                                    <div className='flex100'>{item.ship_phone}</div>
                                    {/* <div className='flex60'><i className="fa-solid fa-pen"></i></div> */}
                                    <div className='flex60 pointer' onClick={() => {
                                        delShpping(item.i_addr);
                                    }}><i className="fa-sharp fa-solid fa-trash"></i></div>
                                </AddressStyle.Ctnt >
                            )
                        })
                    }
                </AddressStyle.Contents >
            }

            {destination.isLoading && <Loading />}
        </Style.InDiv >

    );
};
export default Address;