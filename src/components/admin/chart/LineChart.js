import React, { useState } from 'react';
import { ResponsiveLine } from '@nivo/line'
import { data } from './LineData';
import { useEffect } from 'react';

const LineChart = ({ day }) => {
    const [arr, setArr] = useState([
        {
            "id": "방문자수",
            "data": data[0].data.slice(data[0].data.length - day, data[0].data.length)
        }
    ])
    useEffect(() => {
        setArr([
            {
                "id": "방문자수",
                "data": data[0].data.slice(data[0].data.length - day, data[0].data.length)
            }
        ])
    }, [day])
    return (
        <ResponsiveLine
            data={arr}
            margin={{ top: 20, right: 40, bottom: 30, left: 40 }}
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