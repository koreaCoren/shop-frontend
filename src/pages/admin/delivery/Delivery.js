import React, { useState } from 'react';
import { useMutation } from 'react-query';

import Top from 'components/admin/Top';
import { deliveryUpdate } from 'utils/axios';

import * as Style from "assets/styleComponent/admin/delivery/delivery";
import * as Common from "assets/styleComponent/admin/common";

const Delivery = () => {
    const [defaultDelivery, setDefaultDelivery] = useState("기본 배송지 설정해주세요");
    const update = useMutation(deliveryUpdate);

    const setDelivery = () => {
        const data = {
            default_carrier: defaultDelivery,
        }
        update.mutateAsync(data);
    }

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
        console.log(defaultDelivery);
    }
    return (
        <>
            <Top title={"배송 관리"} isButton={false} />
            <Common.Padding>
                <Common.Container>
                    <Style.defaultUl>
                        <li>
                            <span>기본 배송지 설정 :</span>
                            <div className="select">
                                <select name="defaultDelivery" onChange={onChange}>
                                    <option value={defaultDelivery}>{defaultDelivery}</option>
                                    <option value="1번배송사">1번배송사</option>
                                    <option value="2번배송사">2번배송사</option>
                                    <option value="3번배송사">3번배송사</option>
                                </select>
                                <i className="fa-solid fa-sort-down"></i>
                            </div>

                            <button onClick={setDelivery}>저장</button>
                        </li>
                    </Style.defaultUl>
                </Common.Container>

                <Common.Container>
                    <Style.H2>송장번호 미입력 현황</Style.H2>


                </Common.Container>
            </Common.Padding>
        </>
    );
};

export default Delivery;