import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';

import Top from 'components/admin/Top';
import { defaultSelect, defaultDeliveryUpdate, nullInvoice, deliveryInput } from 'utils/axios';

import * as Style from "assets/styleComponent/admin/delivery/delivery";
import * as Common from "assets/styleComponent/admin/common";
import { getDeliveryList } from 'utils/delivery';
import Loading from 'components/loding/Loading';

const Delivery = () => {
    const [defaultDelivery, setDefaultDelivery] = useState();
    const [deliveryList, setDeliveryList] = useState();
    const [deliveryNumber, setDeliveryNumber] = useState();
    const update = useMutation(defaultDeliveryUpdate);
    const input = useMutation(deliveryInput);
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

    const onSubmit = async (e) => {
        e.preventDefault();
        const arr = e.target;
        const data = [];
        for (let i = 1; i < arr.length; i = i + 2) {
            if (arr[i + 1].value !== '') {
                data.push({ orderCode: arr[i].value, deliveryNumber: arr[i + 1].value, carrier: selectResult.data?.default_carrier });
            }
        }
        input.mutateAsync(data);

    };

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
            case "deliveryNumber":
                setDeliveryNumber(value);
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
                        <form onSubmit={onSubmit}>
                            <Style.H2>송장번호 미입력 현황<button type="submit">저장</button></Style.H2>

                            {
                                incoviceResult.data.map((a, i) => {
                                    return (
                                        <Style.Ul key={i}>
                                            <li>주문자 : {a.buyer_name}</li>
                                            <li>주문번호 : <input className="orderCode" type="text" name="orderCode" value={a.orderCode} tabIndex="-1" readOnly /></li>
                                            <li>송장번호 입력 : <input type="text" name="deliveryNumber" onChange={onChange} /></li>
                                        </Style.Ul>
                                    )
                                })
                            }
                        </form>

                    </Common.Container>
                </Common.Padding>
            </>
    );
};

export default Delivery;