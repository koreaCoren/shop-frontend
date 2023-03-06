import React from 'react';
import { Link } from 'react-router-dom';

import BarChart from 'components/admin/chart/BarChart';
import DonutChart from 'components/admin/chart/DonutChart';
import LineChart from 'components/admin/chart/LineChart';
import LinkButton from 'components/admin/product/button/LinkButton';

import * as Common from 'assets/styleComponent/admin/common';
import * as Style from 'assets/styleComponent/admin/home/Home';

const Home = () => {
    return (
        <Common.Padding>
            <Style.ChartGrid>
                <Common.Container>
                    <BarChart />
                </Common.Container>
                <Common.Container>
                    <DonutChart />
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
                    <LineChart />
                </Common.Container>
                <Common.Container>
                    빨리 생각해내봐
                </Common.Container>
            </Style.BoardGrid>
        </Common.Padding>
    );
};

export default Home;