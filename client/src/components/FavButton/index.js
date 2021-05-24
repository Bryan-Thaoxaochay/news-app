import React, { useState, useEffect } from 'react';
import { Star, StarFill } from 'react-bootstrap-icons';
import { useAuth0 } from '@auth0/auth0-react';
import API from "../../utils/API"
import UserContext from "../../utils/UserContext"
import "./style.css"

function FavButton({ title, url, author }) {
    const { user, isAuthenticated } = useAuth0();
    const [starRender, setStarRender] = useState(false);
    const [savedArticles, setSavedArticles] = useState();

    useEffect(() => {
        loadArticles()
    }, [])

    function saveOnClick(event, title, url, author) {
        event.preventDefault();
        API.saveArticles({
            user: user.name,
            title: title,
            url: url,
            author: author,
        })
            .then(console.log("successfully saved article"))
            .then(setStarRender(current => !current))
            .then(loadArticles())
            .catch(err => console.log(err.response.data));

    };

    function deleteOnClick(event, id) {
        event.preventDefault();
        console.log(event)
        console.log(id)
        setStarRender(current => !current)

    }

    function loadArticles() {
        API.getSavedArticles()
            .then(res => setSavedArticles(res.data))
        // .then(console.log(savedArticles))
    }









    return (
        isAuthenticated && (
            <>
                {!starRender ? (
                    <button
                        type="button"
                        className="btn btn-link star"
                        onClick={(event) => saveOnClick(event, title, url, author)}
                    >
                        Save Article
                    </button>
                ) : (
                    <StarFill />
                    // <>
                    //     {savedArticles.map(articles => {
                    //         articles.url === url ? (
                    //             // console.log(articles._id)
                    //             <button
                    //                 type="button"
                    //                 className="btn btn-link star"
                    //                 onClick={(event) => deleteOnClick(event, articles._id)}
                    //             >
                    //                 <StarFill />
                    //             </button>
                    //         ) : (
                    //             <h3></h3>
                    //         )
                    //     }

                    //     )}
                    // </>
                )}
            </>
        )
    )
}

export default FavButton;