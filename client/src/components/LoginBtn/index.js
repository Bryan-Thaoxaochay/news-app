import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Person } from 'react-bootstrap-icons';
import "./style.css";
function LoginButton() {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
                <button className="login-btn rounded-pill" onClick={() => loginWithRedirect()}><Person className="logIcon"/>Login</button>
        )
    );
};

export default LoginButton;