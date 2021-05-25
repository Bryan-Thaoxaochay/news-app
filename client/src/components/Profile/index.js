import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import API from '../../utils/API';

function Profile() {
    const { user, isAuthenticated } = useAuth0();
    const { users, setUsers } = useState("");

    useEffect(() => {
        checkUser()
    }, [user])

    function checkUser() {
        API.getUsers()
            .then(res => setUsers(res))
            .then(() => {
                for (let i = 0; i < users.length; i++) {
                    if (JSON.stringify(user.sub) === users.auth) {
                        console.log("User already exists.")
                    } else {
                        let userData = {
                            name: user.name,
                            email: user.email,
                            auth: user.sub,
                            date: new Date(Date.now())
                        }
                        API.createUser(userData)
                        console.log(userData)
                    }
                }
            })
            .catch(err => console.log(err))
    }

    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                {JSON.stringify(user, null, 2)}
            </div>
        )
    );
};
export default Profile;