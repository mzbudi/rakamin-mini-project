import NavbarLayout from "./NavbarLayout";
import Dashboard from "../page/Dashboard";


import React from 'react';

const MainLayout = () => {
    return (
        <div className="flex h-screen flex-col grow">
            <NavbarLayout />
            <Dashboard />
        </div>
    );
};

export default MainLayout;