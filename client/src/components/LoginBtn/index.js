import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import "./style.css";
function LoginButton() {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <div id="loginDiv">
                <button className="login-btn" onClick={() => loginWithRedirect()}>Login</button>
                <span className="logIcon">
                <i className="far fa-user fa-2x"></i>
                </span>
            </div>
        )
    );
};

export default LoginButton;