import React from 'react';
import DashboardMain from './Layout/DashboardMain';
import '../static/styles/dashboard.css';


const AdminDashboard = (props) => {

    return (
        <DashboardMain>
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
        </DashboardMain>
    )
}

export default AdminDashboard;