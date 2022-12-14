import AvailableCities from "../../components/AvailableCities";
import worldwide from "../../assets/worldwide.svg";
import "./styles.scss";

export default function Home() {
    return (
        <div className="home-container">
            <h1 className="home-container-title">Weather</h1>
            <p className="home-container-subtitle">Select a city</p>
            <img src={worldwide} alt="world" className="home-container-image" />
            <AvailableCities />
        </div>
    );
}
