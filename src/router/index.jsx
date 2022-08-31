import { Routes, Route } from "react-router-dom";
import Climate from "../pages/Climate";
import Home from "../pages/Home";
import Page404 from "../pages/Page404";
import { citiesOptions } from "../utils";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Page404 />} />
            {citiesOptions.map((option) => (
                <Route
                    key={option.city}
                    path={`/${option.city}`}
                    element={<Climate option={option} />}
                />
            ))}
        </Routes>
    );
}
