import "./styles.scss";
import { Link } from "react-router-dom";

export default function AvailablePeriods() {
    return (
        <div className="periods-container">
            <span className="periods-container-period">Dawn</span>
            <span className="periods-container-image">IMAGE</span>
            <span className="periods-container-degree">10</span>
        </div>
    );
}
