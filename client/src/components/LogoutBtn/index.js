import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { PersonFill } from 'react-bootstrap-icons';

import "./style.css";

function LogoutButton() {
    const { logout, isAuthenticated, user } = useAuth0();

    return (
        isAuthenticated && (
            <div>
            <button className="logout-btn rounded-pill" onClick={() => logout({ returnTo: "https://news-app-5.herokuapp.com/"})}><PersonFill className="logIcon"/>Log Out</button>
            <img src={user.picture} alt={user.name} className="profileImage" height="50px" width="50px" />
            </div>
        )
    );
};

export default LogoutButton;