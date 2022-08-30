import rainSun from "../../assets/rain-sun.svg";
import cloudSun from "../../assets/cloud-sun.svg";
import snowSun from "../../assets/snow-sun.svg";
import snowMoon from "../../assets/snow-moon.svg";
import moon from "../../assets/moon.svg";
import rain from "../../assets/rain.svg";
import sun from "../../assets/sun.svg";
import snowy from "../../assets/snow.svg";
import { getWeatherIcon } from "../../utils";

export default function WeatherIcons({ id, primary = false, night = false }) {
    const icon = getWeatherIcon(id, night);
    const iconOptions = {
        rainSun: { icon: rainSun, alt: "rainSun" },
        cloudSun: { icon: cloudSun, alt: "cloudSun" },
        snowSun: { icon: snowSun, alt: "snowSun" },
        snowMoon: { icon: snowMoon, alt: "snowMoon" },
        moon: { icon: moon, alt: "moon" },
        rain: { icon: rain, alt: "rain" },
        sun: { icon: sun, alt: "sun" },
        snowy: { icon: snowy, alt: "snow" },
        default: { icon: sun, alt: "sun" },
    };
    return (
        <img
            src={iconOptions[icon].icon}
            alt={iconOptions[icon].alt}
            className={`${primary ? "climate" : "periods"}-container-image`}
        />
    );
}
