import "./styles.scss";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../../services/api";
import BackButton from "../../components/BackButton";
import WeatherIcons from "../../components/WeatherIcons";
import Periods from "../../components/Periods";
import Infos from "../../components/Infos";
import DegreeRange from "../../components/DegreeRange";
import { SpinnerCircular } from "spinners-react";
import PageError from "../PageError";

export default function Climate({ option }) {
    const [data, setData] = useState({});
    const [error, setError] = useState({ error: false, message: "" });

    useEffect(() => {
        api.get(
            `forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${option.city}&days=1&aqi=yes&alerts=no`
        )
            .then((response) => setData(response.data))
            .catch((error) => {
                console.log(error);
                setError({ error: true, message: error });
            });
    }, []);

    if (error.error) {
        return <PageError error={error.message} />;
    }

    if (Object.getOwnPropertyNames(data).length) {
        return (
            <div className="climate-container">
                <BackButton />
                <h1 className="climate-container-title">
                    {data.location.name}
                </h1>
                <p className="climate-container-subtitle">
                    {data.forecast.forecastday[0].day.condition.text}
                </p>
                <div className="climate-container-temp">
                    <p className="climate-container-temp-degree">
                        {data.current.temp_c}
                    </p>
                    <DegreeRange
                        forecastday={data.forecast.forecastday[0].day}
                    />
                </div>
                <WeatherIcons
                    primary={true}
                    id={data.forecast.forecastday[0].day.condition.code}
                />
                <Periods hoursArray={data.forecast.forecastday[0].hour} />
                <Infos
                    time={data.forecast.forecastday[0].astro}
                    weather={data.current}
                />
            </div>
        );
    }

    return (
        <div className="spinner">
            <SpinnerCircular
                size={120}
                thickness={100}
                speed={100}
                color="#3ba1b5"
                secondaryColor="rgba(0, 0, 0, 0.44)"
            />
        </div>
    );
}
