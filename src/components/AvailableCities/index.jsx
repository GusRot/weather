import "./styles.scss";
import { Link } from "react-router-dom";
import { citiesOptions } from "../../utils";

export default function AvailableCities() {
    return (
        <div className="cities-container">
            {citiesOptions.map((option) => (
                <Link to={`/${option.city}`} className="cities-container-city">
                    {option.city}
                </Link>
            ))}
        </div>
    );
}
