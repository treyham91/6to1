import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DashboardMain from './Layout/DashboardMain';
import AdminDashboard from './AdminDashboard';
import Login from './Auth/Login';

//apollo middleware 
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';



const IS_LOGGED_IN_QUERY = gql`
    query {
        isLoggedIn @client
    }`

const Dashboard = (props) => {
    return (
            <Router>
                <DashboardMain>
                    <Query query={IS_LOGGED_IN_QUERY}>
                        {({ data }) => data.isLoggedIn ? <AdminDashboard /> : <Login />}
                    </Query>
                </DashboardMain>
                <Route path="/admin-dashboard" component={AdminDashboard} />
            </Router>
    )
}

export default Dashboard;