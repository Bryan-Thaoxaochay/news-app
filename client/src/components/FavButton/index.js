import React, { useState, useEffect } from 'react';
import { Star, StarFill } from 'react-bootstrap-icons';
import { useAuth0 } from '@auth0/auth0-react';
import API from "../../utils/API"
import UserContext from "../../utils/UserContext"
import "./style.css"

function FavButton({ title, url, author }) {
    const { user, isAuthenticated } = useAuth0();
    const [starRender, setStarRender] = useState(false);
    const [savedID, setSavedID] = useState();


    function saveOnClick(event, title, url, author) {
        event.preventDefault();
        API.saveArticles({
            user: user.name,
            title: title,
            url: url,
            author: author,
        })
            .then(console.log("successfully saved article"))
            .catch(err => console.log(err.response.data));
        setStarRender(current => !current);
    };

    function deleteOnClick(event, id) {
        event.preventDefault();
        console.log(event)
        console.log(id)
        setStarRender(current => !current)

    }


        // API.getSavedArticles()
        // .then(res => setSavedID(res.data))
        // .then(console.log(savedID))








    return (
        isAuthenticated && (
            <>
                {!starRender ? (
                    <button
                        type="button"
                        className="btn btn-link"
                        onClick={(event) => saveOnClick(event, title, url, author)}
                    >
                        <Star />
                    </button>
                ) : (
                    <>
                    {/* {savedID.map(saved => ( */}
                            <button
                                type="button"
                                className="btn btn-link"
                                onClick={(event) => deleteOnClick(event)}
                            >
                                <StarFill />
                            </button>
                    {/* ))} */}
                     </>
                )}
            </>
        )



    )

}

export default FavButton;