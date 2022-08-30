import "./styles.scss";
import { Link } from "react-router-dom";
import { citiesOptions } from "../../utils";

export default function AvailableCities() {
    document.body.style.setProperty("--primary", "black");
    document.body.style.setProperty("--secondary", "white");
    return (
        <div className="cities-container">
            {citiesOptions.map((option) => (
                <Link
                    key={option.country}
                    to={`/${option.city}`}
                    className="cities-container-city"
                >
                    {option.city}
                </Link>
            ))}
        </div>
    );
}
