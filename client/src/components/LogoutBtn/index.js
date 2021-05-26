import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import "./style.css";

function LogoutButton() {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div id="logoutDiv">
            <button className="logout-btn rounded-pill" onClick={() => logout({ returnTo: "https://news-app-5.herokuapp.com/"})}>Log Out</button>
            <span className="logIcon"></span>
            </div>
        )
    );
};

export default LogoutButton;