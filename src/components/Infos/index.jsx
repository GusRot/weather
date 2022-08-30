import Informations from "./Informations";

export default function Infos({ time, weather }) {
    return (
        <div className="climate-container-infos">
            <Informations
                attribute={"wind speed"}
                info={`${weather.wind_mph} mph`}
            />
            <Informations attribute={"sunrise"} info={time.sunrise} />
            <Informations attribute={"sunset"} info={time.sunset} />
            <Informations
                attribute={"humidity"}
                info={`${weather.humidity}%`}
            />
        </div>
    );
}
