import "./styles.scss";
import { Link } from "react-router-dom";
import AvailablePeriods from "../../components/AvailablePeriods";
import Informations from "../../components/Informations";

export default function Climate() {
    return (
        <div className="climate-container">
            <Link to="/" className="climate-container-back">
                X
            </Link>
            <h1 className="climate-container-title">LONDON</h1>
            <p className="climate-container-subtitle">Snowy</p>
            <p className="climate-container-degree">5</p>
            <p className="climate-container-image">IMAGE</p>
            <div className="climate-container-periods">
                <AvailablePeriods />
                <AvailablePeriods />
                <AvailablePeriods />
                <AvailablePeriods />
            </div>
            <div className="climate-container-infos">
                <Informations />
                <Informations />
                <Informations />
                <Informations />
            </div>
        </div>
    );
}
