export const citiesOptions = [
    { city: "Dallol", country: "NG" },
    { city: "Fairbanks", country: "US" },
    { city: "Londres", country: "GB" },
    { city: "Recife", country: "BR" },
    { city: "Vancouver", country: "CA" },
    { city: "Yakutsk", country: "RU" },
];

export const kelvinToCelsius = (fahr) => {
    const celsius = (fahr - 273.15).toFixed(1);
    return celsius;
};

export const getLocalTime = (unix) => {
    const date = new Date(unix * 1000);
    const hours =
        date.getHours() - 12 > 0 ? date.getHours() - 12 : date.getHours();
    const min =
        date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;
    const timeFormatted = `${hours}:${min}`;
    return timeFormatted;
};

export const getWeatherIcon = (id, night) => {
    switch (true) {
        case id > 800:
            if (night) {
                return "moon";
            }
            return "cloudSun";

        case 800:
            if (night) {
                return "moon";
            }
            return "sun";

        case id < 800 && id >= 700:
            if (night) {
                return "moon";
            }
            return "cloudSun";

        case id < 700 && id >= 600:
            if (night) {
                return "snowMoon";
            }
            return "snowy";

        case id < 600:
            if (night) {
                return "moon";
            }
            const sunOptions = [300, 301, 400, 401];

            if (sunOptions.indexOf(id) > -1) {
                return "rainSun";
            }

            return "rain";

        default:
            return "default";
    }
};
