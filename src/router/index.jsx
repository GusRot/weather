import { Routes, Route } from "react-router-dom";
import Climate from "../pages/Climate";
import Home from "../pages/Home";
import Page404 from "../pages/Page404";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/climate" element={<Climate />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    );
}
