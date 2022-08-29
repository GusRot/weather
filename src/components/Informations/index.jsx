import "./styles.scss";
import { Link } from "react-router-dom";

export default function Informations() {
    return (
        <div className="informations-container">
            <span className="informations-container-info">Wind Speed</span>
            <span className="informations-container-detail">20AM</span>
        </div>
    );
}
