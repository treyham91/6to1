import React, { useState } from 'react';
import DashboardHeader from './Layout/DashboardHeader';
import SideMenubar from './Layout/Menubar/SideMenubar';
import { withRouter } from "react-router";
import tokens from './Auth/keys/keys';
import '../static/styles/dashboard.css';




const AdminDashboard = (props) => {

    const handleLogout = () => {
        localStorage.removeItem(tokens.AUTH_TOKEN)
        props.history.push("/")
    }
    return (
        <div>
            <div style={{ height: 1000 }}>
                <div style={{ display: 'flex', height: '100%' }}>
                    <SideMenubar />
                    <div style={{ backgroundColor: 'lightgray', width: '100%', margin: 10, borderRadius: 4 }}>
                        <div style={{ textAlign: 'left', margin: 10, fontSize: 30, textTransform: 'none', borderBottom: '1px solid black' }}>
                            <div style={{ fontSize: 15, display: 'flex', height: 30 }}>
                                <DashboardHeader /><a href="#" onClick={handleLogout} id="logout-link" style={{ fontSize: 10 }}>Logout</a>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <p style={{ marginBottom: 0 }}>Dashboard Overview</p>
                                <button id="create-project">Create New Project</button>
                            </div>
                        </div>
                        <div style={{ display: 'grid', gridGap: 15, padding: 10, gridTemplateColumns: 'auto auto auto auto', gridTemplateRows: 'auto auto auto auto' }}>
                            <div className="dashboard-modal" style={{ height: 75 }}>Current Projects</div>
                            <div className="dashboard-modal" style={{ height: 75 }}>Accounts Receivable</div>
                            <div className="dashboard-modal" style={{ height: 75 }}></div>
                            <div className="dashboard-modal" style={{ height: 75 }}></div>
                            <div className="dashboard-modal" style={{ height: 375, gridColumn: '1/4' }}></div>
                            <div className="dashboard-modal" style={{ height: 375, gridColumn: '4/5' }}></div>
                            <div className="dashboard-modal" style={{ height: 375 }}></div>
                            <div className="dashboard-modal" style={{ height: 375, gridColumn: '2/5' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(AdminDashboard);