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
        rainSun: { icon: rainSun, alt: "rainSun", theme: "var(--rain)" },
        cloudSun: { icon: cloudSun, alt: "cloudSun", theme: "var(--sunny)" },
        snowSun: { icon: snowSun, alt: "snowSun", theme: "var(--snow)" },
        snowMoon: { icon: snowMoon, alt: "snowMoon", theme: "var(--snow)" },
        moon: { icon: moon, alt: "moon", theme: "var(--sunny)" },
        rain: { icon: rain, alt: "rain", theme: "var(--rain)" },
        sun: { icon: sun, alt: "sun", theme: "var(--sunny)" },
        snowy: { icon: snowy, alt: "snow", theme: "var(--snow)" },
        default: { icon: sun, alt: "sun", theme: "var(--sunny)" },
    };
    if (primary) {
        document.body.style.setProperty("--primary", iconOptions[icon].theme);
        document.body.style.setProperty(
            "--secondary",
            iconOptions[icon].theme === "var(--snow)" ? "black" : "white"
        );
    }
    return (
        <img
            src={iconOptions[icon].icon}
            alt={iconOptions[icon].alt}
            className={`${primary ? "climate" : "periods"}-container-image`}
        />
    );
}
