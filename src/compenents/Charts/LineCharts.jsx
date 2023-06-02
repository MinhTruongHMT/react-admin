import React from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area
} from "recharts";

const data = [
  {
    name: "12:00",
    uv: 40,
    pv: 24,
    amt: 24
  },
  {
    name: "1:00",
    uv: 30,
    pv: 13,
    amt: 22
  },
  {
    name: "2:00",
    uv: 20,
    pv: 98,
    amt: 22
  },
  {
    name: "3:00",
    uv: 27,
    pv: 39,
    amt: 20
  },
  {
    name: "4:00",
    uv: 18,
    pv: 48,
    amt: 21
  },
  {
    name: "5:00",
    uv: 23,
    pv: 38,
    amt: 25
  },
  {
    name: "6:00",
    uv: 34,
    pv: 43,
    amt: 21
  },
  {
    name: "7:00",
    uv: 40,
    pv: 24,
    amt: 24
  },
  {
    name: "8:00",
    uv: 30,
    pv: 13,
    amt: 22
  },
  {
    name: "9:00",
    uv: 20,
    pv: 98,
    amt: 22
  },
  {
    name: "10:00",
    uv: 27,
    pv: 39,
    amt: 20
  },
  {
    name: "11:00",
    uv: 18,
    pv: 48,
    amt: 21
  },
];


export const LineCharts = () => {
  return (
    <AreaChart width={730} height={250} data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="5">
          <stop offset="0%" stopColor="#8884d8" />
          <stop offset="100%" stopColor="#f70c0c" />
        </linearGradient>
      </defs>
      <XAxis axisLine={false} tickLine={false} dataKey="name" tickCount={0} stroke="#DEDEE7" tick={{ fill: "#A4A4B3", fontSize: 12 }} />
      <YAxis tickCount={5} stroke="#DEDEE7"   />
      <CartesianGrid className="grid-horizontal" strokeWidth={1} vertical={false} stroke="#DEDEE7"   />
      <Tooltip/>
      <Area className="Linea" type="monotone" dataKey="pv" stroke="url(#colorUv)" strokeWidth={4} fillOpacity={1} fill="url(#colorPv)" />
    </AreaChart>
  );
}
