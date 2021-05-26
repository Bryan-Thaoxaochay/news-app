import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { PersonFill } from 'react-bootstrap-icons';
import "./style.css";

function LogoutButton() {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <button className="logout-btn" onClick={() => logout({ returnTo: "https://news-app-5.herokuapp.com/"})}><PersonFill className="logIcon"/>Log Out</button>
        )
    );
};

export default LogoutButton;