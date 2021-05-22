import React, { useState } from 'react';
import { Star, StarFill } from 'react-bootstrap-icons';
import { useAuth0 } from '@auth0/auth0-react';
import API from "../../utils/API"
import UserContext from "../../utils/UserContext"
import "./style.css"

function FavButton({title, url, author}) {
    const { user, isAuthenticated } = useAuth0();


    function handleOnClick(event, title, url, author) {
        event.preventDefault();
        console.log(title);
        console.log(url);
        console.log(author);
        console.log(user.name)
        API.saveArticles({
            user: user.name,
            title: title,
            url: url,
            author: author
        })
        .catch(err => console.log(err))
    }


    return (
        isAuthenticated && (
        <>
        <button 
        type="button" 

        className="btn btn-link"
        // value={[title, url, author]}
        onClick={(event) =>handleOnClick(event, title, url, author )}
        >
            <Star />
        </button>

        <StarFill />
        </>   
        )

 

    )

}

export default FavButton;