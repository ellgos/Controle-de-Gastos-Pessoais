import { Route, Routes } from "react-router-dom"
import Dashboard from '@pages/Dashboard'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Add more routes as needed */}

        </Routes>
    )
}

export default AppRoutes;