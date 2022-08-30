import "./styles.scss";
import { Link } from "react-router-dom";

export default function Informations({ attribute, info, time }) {
    return (
        <>
            <div className="informations-container">
                <span className="informations-container-info">
                    {attribute} {time}
                </span>
                <span className="informations-container-detail">{info}</span>
            </div>
            <div className="informations-container-separator"></div>
        </>
    );
}
