import "./styles.scss";

export default function Informations({ attribute, info }) {
    return (
        <>
            <div className="informations-container">
                <span className="informations-container-info">{attribute}</span>
                <span className="informations-container-detail">{info}</span>
            </div>
            <div className="informations-container-separator"></div>
        </>
    );
}
