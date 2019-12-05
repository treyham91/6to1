import React from 'react';
import DropdownMenuItem from './DropdownMenuItem';
import { Icon } from 'antd';
import '../../../static/styles/dashboard.css';

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

const projectItems = [
    { key: 1, value: 'Overview', linkTo: '/project/overview' },
    { key: 2, value: 'Billing', linkTo: '/messages' },
    { key: 3, value: 'Notifications', linkTo: '' },
]


const SideMenubar = (props) => {

    return (
        <Query query={ME_QUERY}>
            {({ data, loading, error, client }) => {
                if (loading) {
                    return (
                        <div id="navbar-side-container">
                            Loading...
                        </div>
                    )
                }
                return (
                    <div id="navbar-side-container">
                        <ul id="navbar-side-item-container">
                            <DropdownMenuItem iconType="build" value="Projects" subMenuItems={projectItems} />
                            <li className="navbar-side-item">
                                <Icon style={{ margin: 10 }} type="mail" />Messages</li>
                            <li className="navbar-side-item">
                                <Icon style={{ margin: 10 }} type="setting" />Site Management</li>
                        </ul>
                    </div>
                )
            }}
        </Query>
    )
}

export default SideMenubar;