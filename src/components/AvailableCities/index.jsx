import "./styles.scss";
import { Link } from "react-router-dom";

export default function AvailableCities() {
    return (
        <div className="cities-container">
            <Link to="/climate" className="cities-container-city">
                Vancouver
            </Link>
            <Link to="/climate" className="cities-container-city">
                Vancouver
            </Link>
            <Link to="/climate" className="cities-container-city">
                Vancouver
            </Link>
            <Link to="/climate" className="cities-container-city">
                Vancouver
            </Link>
            <Link to="/climate" className="cities-container-city">
                Vancouver
            </Link>
            <Link to="/climate" className="cities-container-city">
                Vancouver
            </Link>
        </div>
    );
}
