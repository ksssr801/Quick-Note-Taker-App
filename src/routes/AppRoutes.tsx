import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.tsx";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
            ></Route>
        </Routes>
    )
};

export default AppRoutes;