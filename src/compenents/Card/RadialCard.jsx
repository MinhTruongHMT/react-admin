import { RadialChart } from "compenents/Charts";


const data = [
    {
        name: "Bank",
        uv: 31.47,
        pv: 2400,
        fill: "#8884d8"
    },
    {
        name: "Stock",
        uv: 26.69,
        pv: 4567,
        fill: "#83a6ed"
    },
    {
        name: "Token",
        uv: 15.69,
        pv: 1398,
        fill: "#8dd1e1"
    },
    {
        name: "Cash",
        uv: 8.22,
        pv: 9800,
        fill: "#82ca9d"
    },
];

export const RadialCard = () => {
    return (
        <div>
            <h1>Money Allocation</h1>
            <RadialChart data={data} />
        </div>
    );
}