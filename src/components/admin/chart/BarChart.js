import React from 'react';
import { ResponsiveBar } from '@nivo/bar'
import { data } from './BarData';

const Chart = () => {
    return (
        <ResponsiveBar
            data={data}
            keys={[
                'donut'
            ]}
            indexBy="country"
            margin={{ top: 50, right: 70, bottom: 70, left: 70 }}
            padding={0.30}
            innerPadding={2}
            groupMode="grouped"
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'set3' }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: '#38bcb2',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: '#eed312',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'fries'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'sandwich'
                    },
                    id: 'lines'
                }
            ]}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            }}
            axisTop={null}
            axisRight={null}
            enableLabel={false}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            }}
            theme={{
                axis: {
                    legend: {
                        text: {
                            fontSize: 20,
                            fontWeight: 600,
                            fontFamily: "Pretendard-Regular",
                            fill: '#000000',
                        },
                    },
                },
            }}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '주간 상품 판매 현황',
                legendOffset: 50,
                legendPosition: 'middle'
            }}
            legends={[]}
            role="application"
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={function (e) { return e.id + ": " + e.formattedValue + " in country: " + e.indexValue }}
        />
    );
};

export default Chart;