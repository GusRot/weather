export const citiesOptions = [
    { city: "Dallol", country: "NG" },
    { city: "Fairbanks", country: "US" },
    { city: "Londres", country: "GB" },
    { city: "Recife", country: "BR" },
    { city: "Vancouver", country: "CA" },
    { city: "Yakutsk", country: "RU" },
];

export const getWeatherIcon = (id, night) => {
    switch (id) {
        case 1003 || 1006 || 1009 || 1030 || 1135:
            if (night) {
                return "moon";
            }
            return "cloudSun";

        case 1000:
            if (night) {
                return "moon";
            }
            return "sun";

        case id < 800 && id >= 700:
            if (night) {
                return "moon";
            }
            return "cloudSun";

        case 1114 ||
            1066 ||
            1072 ||
            1114 ||
            1168 ||
            1210 ||
            1213 ||
            1216 ||
            1219 ||
            1222 ||
            1225 ||
            1237:
            if (night) {
                return "snowMoon";
            }
            return "snowy";

        case 1117 ||
            1192 ||
            1198 ||
            1240 ||
            1243 ||
            1246 ||
            1249 ||
            1252 ||
            1255 ||
            1258 ||
            1261 ||
            1264 ||
            1273 ||
            1276 ||
            1279 ||
            1282:
            if (night) {
                return "moon";
            }

            return "rain";

        case 1063 || 1053 || 1180 || 1183 || 1186:
            if (night) {
                return "moon";
            }

            return "rainSun";

        default:
            return "default";
    }
};
