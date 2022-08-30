export default function DegreeRange({ forecastday }) {
    return (
        <div className="climate-container-temp-range">
            <span className="climate-container-temp-unit">C</span>
            <span className="climate-container-temp-range-min">
                {forecastday.maxtemp_c}
            </span>
            <span className="climate-container-temp-range-max">
                {forecastday.mintemp_c}
            </span>
        </div>
    );
}
