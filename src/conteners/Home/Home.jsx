import LayoutStyle from "compenents/Layout/LayoutStyle";
import { TokenPrice } from "compenents/TokenPrice";
import { RadialCard } from "compenents/Card/RadialCard";

const Home = () => {
    return (
        <LayoutStyle>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <TokenPrice />
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: 40 }}>
                   
                </div>
                <RadialCard />
            </div>
        </LayoutStyle >
    );
}
export default Home;