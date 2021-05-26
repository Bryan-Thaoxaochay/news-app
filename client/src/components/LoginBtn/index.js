import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import "./style.css";

function LoginButton() {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <div id="loginDiv">
                <button className="login-btn rounded-pill" onClick={() => loginWithRedirect()}> Login</button>
                <span className="logIcon">
                </span>
            </div>
        )
    );
};

export default LoginButton;