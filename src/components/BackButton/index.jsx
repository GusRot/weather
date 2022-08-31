import { Link } from "react-router-dom";
import "./styles.scss";

export default function BackButton() {
    return (
        <Link to="/" className="climate-container-back">
            &#x2190;
        </Link>
    );
}
