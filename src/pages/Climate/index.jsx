import "./styles.scss";
import AvailablePeriods from "../../components/AvailablePeriods";
import Informations from "../../components/Informations";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../../services/api";
import BackButton from "../../components/BackButton";
import { kelvinToCelsius, getLocalTime } from "../../utils";
import WeatherIcons from "../../components/WeatherIcons";

export default function Climate({ option }) {
    const [data, setData] = useState({});

    useEffect(() => {
        api.get(
            `weather?q=${option.city},${option.country}&appid=754f741299d91a56308cb22101c457af`
        )
            .then((response) => setData(response.data))
            .catch((error) => console.log(error));
    }, []);

    if (Object.getOwnPropertyNames(data).length) {
        return (
            <div className="climate-container">
                <BackButton />
                <h1 className="climate-container-title">{data.name}</h1>
                <p className="climate-container-subtitle">
                    {data.weather[0].main}
                </p>
                <div className="climate-container-temp">
                    <p className="climate-container-temp-degree">
                        {kelvinToCelsius(data.main.temp)}
                    </p>
                    <div className="climate-container-temp-range">
                        <span className="climate-container-temp-unit">C</span>
                        <span className="climate-container-temp-range-min">
                            {kelvinToCelsius(data.main.temp_max)}
                        </span>
                        <span className="climate-container-temp-range-max">
                            {kelvinToCelsius(data.main.temp_min)}
                        </span>
                    </div>
                </div>
                <WeatherIcons primary={true} id={data.weather[0].id} />
                <div className="climate-container-periods">
                    <AvailablePeriods
                        period="dawn"
                        degree={20}
                        weather={data.weather[0].id}
                    />
                    <AvailablePeriods
                        period="morning"
                        degree={20}
                        weather={data.weather[0].id}
                    />
                    <AvailablePeriods
                        period="afternoon"
                        degree={20}
                        weather={data.weather[0].id}
                    />
                    <AvailablePeriods
                        period="night"
                        degree={20}
                        weather={data.weather[0].id}
                    />
                </div>
                <div className="climate-container-infos">
                    <Informations
                        attribute={"wind speed"}
                        info={`${data.wind.speed} m/s`}
                    />
                    <Informations
                        attribute={"sunrise"}
                        info={`${getLocalTime(data.sys.sunrise)} AM`}
                    />
                    <Informations
                        attribute={"sunset"}
                        info={`${getLocalTime(data.sys.sunset)} PM`}
                    />
                    <Informations
                        attribute={"humidity"}
                        info={`${data.main.humidity}%`}
                    />
                </div>
            </div>
        );
    }

    return <></>;
}
