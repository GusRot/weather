import AvailableCities from "../../components/AvailableCities";
import "./styles.scss";

export default function Home() {
    return (
        <div className="home-container">
            <h1 className="home-container-title">Weather</h1>
            <p className="home-container-subtitle">Select a city</p>
            <p className="home-container-image">IMAGE</p>
            <AvailableCities />
        </div>
    );
}
