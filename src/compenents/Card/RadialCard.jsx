import { RadialChart } from "compenents/Charts";


const data = [
    {
        name: "Bank",
        uv: 31.47,
        pv: 2400,
        fill: "#F3BA2F",
        values: "$83726"
    },
    {
        name: "Stock",
        uv: 26.69,
        pv: 4567,
        fill: "#9020E9",
        values: "$623726"
    },
    {
        name: "Token",
        uv: 15.69,
        pv: 1398,
        fill: "#54C2C1",
        values: "$23726"

    },
    {
        name: "Cash",
        uv: 8.22,
        pv: 9800,
        fill: "#00000",
        values: "$73726"
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