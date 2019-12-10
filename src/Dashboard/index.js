import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import SiteManagementMain from './Site Management/SiteManagementMain';
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
            <Query query={IS_LOGGED_IN_QUERY}>
                {({ data }) => data.isLoggedIn ? <AdminDashboard /> : <Login />}
            </Query>
            <Route path="/admin-dashboard" component={AdminDashboard} />
            <Route path="/site-management" component={SiteManagementMain} />
        </Router>
    )
}

export default Dashboard;