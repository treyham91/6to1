import React, { useState, useEffect } from 'react';
import DashboardMain from './Layout/DashboardMain';
import Login from './Auth/Login';


const Dashboard = (props) => {
    return (
        <DashboardMain>
            <Login />
        </DashboardMain>
    )
}

export default Dashboard;