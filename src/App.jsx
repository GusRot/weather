import Router from "./router";
import { BrowserRouter } from "react-router-dom";
import "./styles/global.scss";

function App() {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
}

export default App;
