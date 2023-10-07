import {Route, Routes} from "react-router-dom";
import App from "../App";
import LoginPage from "../components/LoginPage/LoginPage";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/callback" element={<App />} />
        </Routes>
    )
}

export default AppRoutes;