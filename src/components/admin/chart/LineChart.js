import React from 'react';
import { ResponsiveLine } from '@nivo/line'
import { data } from './LineData';

const LineChart = () => {
    return (
        <ResponsiveLine
            data={data}
            margin={{ top: 20, right: 40, bottom: 70, left: 40 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '방문자 수',
                legendOffset: 50,
                legendPosition: 'middle'
            }}
            enableGridX={false}
            enablePoints={false}
            colors={{ scheme: 'set3' }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[]}
        />
    );
};

export default LineChart;