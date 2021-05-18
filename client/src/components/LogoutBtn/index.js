import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LogoutButton() {
    const { logout } = useAuth0();

    return (
        <button onClick={() => logout({ returnTo: "https://news-app-5.herokuapp.com" })}>Log Out</button>
    );
};

export default LogoutButton;