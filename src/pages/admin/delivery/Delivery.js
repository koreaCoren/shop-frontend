import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';

import Top from 'components/admin/Top';
import { defaultSelect, deliveryUpdate, nullInvoice } from 'utils/axios';

import * as Style from "assets/styleComponent/admin/delivery/delivery";
import * as Common from "assets/styleComponent/admin/common";
import { getDeliveryList } from 'utils/delivery';
import Loading from 'components/loding/Loading';

const Delivery = () => {
    const [defaultDelivery, setDefaultDelivery] = useState();
    const [deliveryList, setDeliveryList] = useState();
    const update = useMutation(deliveryUpdate);
    const selectResult = useQuery("defaultSelect", defaultSelect);
    const incoviceResult = useQuery("nullInvoice", nullInvoice);

    const setDelivery = async () => {
        const arr = await getDeliveryList();
        const data = {};
        arr.data.forEach(el => {
            if (el.id === defaultDelivery) {
                data.name = el.name;
                data.default_carrier = defaultDelivery;
            }
        });
        update.mutateAsync(data);
        alert("저장완료");
        selectResult.refetch();
    }

    const getList = async () => {
        const arr = await getDeliveryList();
        setDeliveryList(arr.data);
    }

    useEffect(() => {
        getList();
    }, [])

    useEffect(() => {
        setDefaultDelivery(selectResult.data?.carrier_name);
    }, [selectResult.isLoading])


    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        switch (name) {
            case "defaultDelivery":
                setDefaultDelivery(value);
                break;

            default:
                break;
        }
    }
    return (
        incoviceResult.isLoading
            ? <Loading />
            : <>
                <Top title={"배송 관리"} isButton={false} />
                <Common.Padding>
                    <Common.Container>
                        <Style.DefaultUl>
                            <li>
                                <span>기본 배송사 설정 :</span>
                                <div className="select">
                                    <select name="defaultDelivery" onChange={onChange}>
                                        <option value="">{defaultDelivery}</option>
                                        {
                                            deliveryList?.map((a, i) => {
                                                return (
                                                    <option key={i} value={a.id}>{a.name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    <i className="fa-solid fa-sort-down"></i>
                                </div>

                                <button onClick={setDelivery}>저장</button>
                            </li>
                        </Style.DefaultUl>
                    </Common.Container>

                    <Common.Container>
                        <Style.H2>송장번호 미입력 현황</Style.H2>

                        {
                            incoviceResult.data.map((a, i) => {
                                return (
                                    <Style.Ul key={i}>
                                        <li>주문자 : {a.buyer_name}</li>
                                        <li>주문번호 : {a.orderCode}</li>
                                        <li>송장번호 입력 : <input type="text" /><button>저장</button></li>
                                    </Style.Ul>
                                )
                            })
                        }
                    </Common.Container>
                </Common.Padding>
            </>
    );
};

export default Delivery;