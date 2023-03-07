import React from 'react';
import { Link } from 'react-router-dom';

import BarChart from 'components/admin/chart/BarChart';
import DonutChart from 'components/admin/chart/DonutChart';
import LineChart from 'components/admin/chart/LineChart';
import LinkButton from 'components/admin/product/button/LinkButton';

import * as Common from 'assets/styleComponent/admin/common';
import * as Style from 'assets/styleComponent/admin/home/Home';
import { useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [product, setProduct] = useState(7);
    const [visitor, setVisitor] = useState(7);

    const test = async () => {
        axios.get("http://192.168.0.14:8080/test").then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }
    test();

    const onChenge = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        switch (name) {
            case "product":
                setProduct(value);
                break;
            case "visitor":
                setVisitor(value);
                break;

            default:
                break;
        }
    }

    return (
        <Common.Padding>
            <Style.ChartGrid>
                <Common.Container>
                    <Style.Title>
                        <h3>상품 판매 현황</h3>
                        <div className="selectBox">
                            <select name='product' onChange={onChenge}>
                                <option value="7">7일</option>
                                <option value="15">15일</option>
                                <option value="30">30일</option>
                            </select>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                    </Style.Title>
                    <div style={{ width: "100%", maxHeight: "400px", height: "100%" }}>
                        <BarChart day={product} />
                    </div>
                </Common.Container>
                <Common.Container>
                    <Style.Title>
                        <h3>누적 판매 TOP 5</h3>
                    </Style.Title>
                    <div style={{ width: "100%", maxHeight: "400px", height: "100%" }}>
                        <DonutChart />
                    </div>
                </Common.Container>
            </Style.ChartGrid>
            <Style.BoardGrid>
                <Common.Container>
                    <Style.Situation>
                        <li>
                            <h3>주문상황</h3>
                            <div>
                                <span>
                                    <h4>입금</h4>
                                    <div>0건</div>
                                </span>
                                <span>
                                    <h4>배송</h4>
                                    <div>0건</div>
                                </span>
                                <span>
                                    <h4>완료</h4>
                                    <div>0건</div>
                                </span>
                            </div>
                        </li>
                        <li>
                            <h3>송장 미입력 현황</h3>
                            <div>
                                <span>
                                    <h4>송장 미입력</h4>
                                    <div>0건</div>
                                    <LinkButton link={"/admin/delivery"} title={"바로가기"} />
                                </span>
                            </div>
                        </li>
                        <li>
                            <h3>재고상황</h3>
                            <div>
                                <span>
                                    <h4>위험</h4>
                                    <div>0건</div>
                                </span>
                                <span>
                                    <h4>부족</h4>
                                    <div>0건</div>
                                </span>
                            </div>
                        </li>
                    </Style.Situation>
                </Common.Container>
                <Common.Container>
                    <Style.Title>
                        <h3>방문자 수</h3>
                        <div className="selectBox">
                            <select name='visitor' onChange={onChenge}>
                                <option value="7">7일</option>
                                <option value="15">15일</option>
                                <option value="30">30일</option>
                            </select>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                    </Style.Title>
                    <div style={{ width: "100%", maxHeight: "370px", height: "100%" }}>
                        <LineChart day={visitor} />
                    </div>
                </Common.Container>
                <Common.Container>
                    빨리 생각해내봐
                </Common.Container>
            </Style.BoardGrid>
        </Common.Padding >
    );
};

export default Home;