import React from 'react';
import '../../static/styles/dashboard.css';

//apollo middleware 
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

const ME_QUERY = gql`
    {
        me {
            id
            firstName
            lastName
        }
    }
`;



const DashboardHeader = (props) => {

    return (
        <Query query={ME_QUERY}>
            {({ data, loading, error, client }) => {
                if (loading) {
                    return (
                        <div id="dashboard-header-container">
                        </div>
                    )
                }
                return (
                    <div id="dashboard-header-container">
                        <p>Hello, {data.me.firstName}!</p>
                    </div>
                )
            }}
        </Query>
    )
}

export default DashboardHeader;