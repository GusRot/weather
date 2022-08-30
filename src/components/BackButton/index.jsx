import "./styles.scss";
import { Link } from "react-router-dom";

export default function BackButton() {
    return (
        <Link to="/" className="climate-container-back">
            &#x2190;
        </Link>
    );
}
