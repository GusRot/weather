import WeatherIcons from "../../WeatherIcons";
import "./styles.scss";

export default function AvailablePeriods({ period, degree, weather }) {
    return (
        <div className="periods-container">
            <span className="periods-container-period">{period}</span>
            <WeatherIcons
                id={weather}
                night={period === "night" ? true : false}
            />
            <span className="periods-container-degree">{`${degree} °C`}</span>
        </div>
    );
}
