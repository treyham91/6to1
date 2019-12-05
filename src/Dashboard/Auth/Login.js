import React, { useState, useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import gql from 'graphql-tag';
import tokens from './keys/keys';
import { Mutation } from 'react-apollo';
import '../../static/styles/dashboard-login.css';

const LOGIN_MUTATION = gql`
mutation ($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
        token
        refreshToken
    }               
}
`;

const asyncSetItem = (client, res) => {
    let setItemPromise = new Promise(() => {
        localStorage.setItem(tokens.AUTH_TOKEN, res.data.tokenAuth.token)
        localStorage.setItem(tokens.REFRESH_TOKEN, res.data.tokenAuth.refreshToken)
        client.writeData({ data: { isLoggedIn: true } })
    })

    setItemPromise
        .then(() => console.log('Logged in successfully'))
        .catch(err => console.log(err))
}


const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event, tokenAuth, client) => {
        event.preventDefault();
        const res = await tokenAuth()
        asyncSetItem(client, res)
    }

    const handleComplete = () => {
        setUsername("")
        setPassword("")
    }

    return (
        <Mutation
            mutation={LOGIN_MUTATION}
            variables={{ username, password }}
            onCompleted={data => {
                console.log(data);
                handleComplete()
                props.history.push('dashboard/admin-dashboard')
            }}
            onError={() => {
            }}>
            {(tokenAuth, { loading, error, called, client }) => {
                return (
                    <div id="form-container">
                        <form id="form" onSubmit={event => handleSubmit(event, tokenAuth, client)}>
                            <p id="error-message" style={{ display: error ? 'block' : 'none' }}>
                                Incorrect username or password
                        </p>
                            <p>Six-to-One Admin</p>
                            <input
                                className="login-input"
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={event => setUsername(event.target.value)} /><br />
                            <input
                                className="login-input"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={event => setPassword(event.target.value)} /><br />
                            <input
                                id="login-button"
                                type="submit"
                                value={loading ? "Logging in..." : "Login"}
                                onSubmit={event => handleSubmit(event, tokenAuth, client)} />
                        </form>
                    </div>
                )
            }}
        </Mutation>
    )
}

export default withRouter(Login);