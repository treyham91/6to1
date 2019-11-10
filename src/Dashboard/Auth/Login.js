import React, { useState, useEffect, useRef } from 'react';
import Test from '../test';
import '../../static/styles/dashboard-login.css';


const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(null);

    const submitForm = () => {
        if (count >= 1) {
            return;
        }

        else {
            setCount(1)
        }
    }

    return (
        <div id="form-container">
            <form id="form" onSubmit={submitForm}>
                <p id="error-message" style={{ display: error ? 'block' : 'none' }}>
                    Incorrect username or password
                </p>
                <p>Six-to-One Admin</p>
                <Test firstCount={count} secondCount={count2} />
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
                    value="Login"
                    onSubmit={submitForm} />
            </form>
        </div>
    )
}

export default Login;