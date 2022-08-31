import AvailablePeriods from "./AvailablePeriods";

export default function Periods({ hoursArray }) {
    const periods = [
        { period: "dawn", ...hoursArray[3] },
        { period: "morning", ...hoursArray[9] },
        { period: "afternoon", ...hoursArray[15] },
        { period: "night", ...hoursArray[21] },
    ];
    return (
        <div className="climate-container-periods">
            {periods.map((period) => (
                <AvailablePeriods
                    key={period.period}
                    period={period.period}
                    degree={period.temp_c}
                    weather={period.condition.code}
                />
            ))}
        </div>
    );
}
