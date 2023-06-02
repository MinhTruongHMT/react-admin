import React from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";
import styled from "styled-components";
const StyleUl = styled.ul`
 column-width: 10em;
    columns: 2 auto;
    column-rule: 1px solid rgb(75, 70, 74);
    li{
        list-style: none;
    }
`;

const style = {
    lineHeight: "24px",
    width: 350,

};

const renderLegend = (props) => {
    const { payload } = props;
    console.log(payload);

    return (
        <StyleUl >
            {
                payload.map((entry, index) => {
                    console.log(entry)
                    const colors = entry.color;
                    return <li li key={`item-${index}`}> <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: colors, display: "inline-block" , marginRight:10}}></div>{entry.value} <span style={{fontSize:15,fontWeight:700,marginLeft:10}}> {entry.payload.values}</span> </li>
                })
            }
        </StyleUl >
    );
}
export const RadialChart = ({ data }) => {
    return (
        <RadialBarChart
            width={500}
            height={500}
            cx={150}
            cy={150}
            innerRadius={20}
            outerRadius={140}
            barSize={10}
            data={data}
        >
            <RadialBar background dataKey="uv" />
            <Legend
                iconSize={10}
                width={120}
                height={120}
                layout="horizontal"
                align="center"
                verticalAlign="bottom"
                wrapperStyle={style}
                iconType="circle"
                content={renderLegend}
            />
        </RadialBarChart>
    );
}