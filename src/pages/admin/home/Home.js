import React, { useState } from 'react';
import { useQuery } from 'react-query';

import BarChart from 'components/admin/chart/BarChart';
import DonutChart from 'components/admin/chart/DonutChart';
import LineChart from 'components/admin/chart/LineChart';
import LinkButton from 'components/admin/product/button/LinkButton';

import * as Common from 'assets/styleComponent/admin/common';
import * as Style from 'assets/styleComponent/admin/home/Home';

import { accumulateSell, sellByDateList, userAccessCount, sel_dash } from 'utils/axios';
import { useEffect } from 'react';
import Loading from 'components/loding/Loading';

const Home = () => {
    const [product, setProduct] = useState(7);
    const [visitor, setVisitor] = useState(7);
    const [isDataLoading, setIsDataLoading] = useState(false);
    const bar = useQuery("sellByDateList", sellByDateList);
    const donut = useQuery("accumulateSell", accumulateSell);
    const line = useQuery("userAccessCount", userAccessCount);
    const dash = useQuery("sel_dash", sel_dash);


    useEffect(() => {
        if (donut.isLoading === false &&
            bar.isLoading === false &&
            line.isLoading === false
        ) {
            setIsDataLoading(true);
        }
    }, [donut.isLoading, bar.isLoading, line.isLoading])

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
        isDataLoading === false
            ? <Loading />
            : <Common.Padding>
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
                            <BarChart data={bar.data} day={product} />
                        </div>
                    </Common.Container>
                    <Common.Container>
                        <Style.Title>
                            <h3>누적 판매 TOP 5</h3>
                        </Style.Title>
                        <div style={{ width: "100%", maxHeight: "400px", height: "100%" }}>
                            <DonutChart data={donut.data} />
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
                                        <div>{dash.data?.input === null ? 0 : dash.data?.input}건</div>
                                    </span>
                                    <span>
                                        <h4>배송</h4>
                                        <div>{dash.data?.delivering === null ? 0 : dash.data?.delivering}건</div>
                                    </span>
                                    <span>
                                        <h4>완료</h4>
                                        <div>{dash.data?.complete === null ? 0 : dash.data?.complete}건</div>
                                    </span>
                                </div>
                            </li>
                            <li>
                                <h3>송장 미입력 현황</h3>
                                <div>
                                    <span>
                                        <h4>송장 미입력</h4>
                                        <div>
                                            {dash.data?.delivery_not === null
                                                ? 0
                                                : dash.data?.delivery_not}건</div>
                                        <LinkButton link={"/admin/delivery"} title={"바로가기"} />
                                    </span>
                                </div>
                            </li>
                            <li>
                                <h3>재고상황</h3>
                                <div>
                                    <span>
                                        <h4>위험</h4>
                                        <div>{dash.data?.warning === null ? 0 : dash.data?.warning}건</div>
                                    </span>
                                    <span>
                                        <h4>부족</h4>
                                        <div>{dash.data?.shortage === null ? 0 : dash.data?.shortage}건</div>
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
                            <LineChart data={line.data} day={visitor} />
                        </div>
                    </Common.Container>
                    <Common.Container>
                        <Style.Title>
                            <h3>상품 후기</h3>

                        </Style.Title>
                    </Common.Container>
                </Style.BoardGrid>
            </Common.Padding >
    );
};

export default Home;