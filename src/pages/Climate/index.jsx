import "./styles.scss";
import { Link } from "react-router-dom";
import AvailablePeriods from "../../components/AvailablePeriods";
import Informations from "../../components/Informations";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../../services/api";

export default function Climate({ option }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        api.get(
            `weather?q=${option.city},${option.country}&appid=754f741299d91a56308cb22101c457af`
        )
            .then((response) => setData(response.data))
            .finally(console.log(data));
    }, []);

    return (
        <div className="climate-container">
            <Link to="/" className="climate-container-back">
                &#x2190;
            </Link>
            <h1 className="climate-container-title">{data.name}</h1>
            <p className="climate-container-subtitle">Snowy</p>
            <div className="climate-container-temp">
                <p className="climate-container-temp-degree">
                    {data.main.temp}
                </p>
                <div className="climate-container-temp-range">
                    <span className="climate-container-temp-unit">°C</span>
                    <span className="climate-container-temp-range-min">14</span>
                    <span className="climate-container-temp-range-max">25</span>
                </div>
            </div>
            <p className="climate-container-image">IMAGE</p>
            <div className="climate-container-periods">
                <AvailablePeriods />
                <AvailablePeriods />
                <AvailablePeriods />
                <AvailablePeriods />
            </div>
            <div className="climate-container-infos">
                <Informations />
                <Informations />
                <Informations />
                <Informations />
            </div>
        </div>
    );
}
