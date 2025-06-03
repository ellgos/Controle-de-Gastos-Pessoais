import { Route, Routes } from "react-router-dom"
import Dashboard from '@pages/Dashboard'
import App from "App";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="dashboard" element={<Dashboard />} />
            {/* Add more routes as needed */}

        </Routes>
    )
}

export default AppRoutes;