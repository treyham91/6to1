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
                            <div style={{ border: '1px solid gray', height: 75, borderRadius: 4, backgroundColor: 'white', textTransform: 'none', padding: 10, textAlign: 'left' }}>Current Projects</div>
                            <div style={{ border: '1px solid gray', height: 75, borderRadius: 4, backgroundColor: 'white', textTransform: 'none', padding: 10, textAlign: 'left' }}>Accounts Receivable</div>
                            <div style={{ border: '1px solid gray', height: 75, borderRadius: 4, backgroundColor: 'white' }}></div>
                            <div style={{ border: '1px solid gray', height: 75, borderRadius: 4, backgroundColor: 'white' }}></div>
                            <div style={{ border: '1px solid gray', height: 375, borderRadius: 4, backgroundColor: 'white', gridColumn: '1/4' }}></div>
                            <div style={{ border: '1px solid gray', height: 375, borderRadius: 4, backgroundColor: 'white', gridColumn: '4/5' }}></div>
                            <div style={{ border: '1px solid gray', height: 375, borderRadius: 4, backgroundColor: 'white' }}></div>
                            <div style={{ border: '1px solid gray', height: 375, borderRadius: 4, backgroundColor: 'white', gridColumn: '2/5' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default withRouter(AdminDashboard);