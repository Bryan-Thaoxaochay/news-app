import React, { useState, useEffect } from 'react';
import { Star, StarFill } from 'react-bootstrap-icons';
import { useAuth0 } from '@auth0/auth0-react';
import API from "../../utils/API"
import UserContext from "../../utils/UserContext"
import "./style.css"

function FavButton({ title, url, author, image }) {
    const { user, isAuthenticated } = useAuth0();
    const [starRender, setStarRender] = useState(false);
    const [savedArticles, setSavedArticles] = useState();

    useEffect(() => {
        loadArticles()
    }, [])

    function saveOnClick(event, title, url, author, image) {
        event.preventDefault();
        API.saveArticles({
            user: user.name,
            title: title,
            url: url,
            author: author,
            image: image
        })
            .then(console.log("successfully saved article"))
            .then(setStarRender(current => !current))
            .then(loadArticles())
            .catch(err => console.log(err.response.data));

    };

    function deleteOnClick(event, id) {
        event.preventDefault();
        API.deleteSavedArticles(id)
            .then(setStarRender(current => !current))
            .catch(err => console.log(err.response.data));

    }

    function loadArticles() {
        API.getSavedArticles()
            .then(res => setSavedArticles(res.data));
    }









    return (
        isAuthenticated && (
            <>
                {!starRender ? (
                    <button
                        type="button"
                        className="btn btn-link star"
                        onClick={(event) => saveOnClick(event, title, url, author, image)}
                        
                    >
                        <Star height="27px" width="27px"/>
                    </button>
                ) : (

                    <button
                        type="button"
                        className="btn btn-link starFilled"
                        onClick={(event) => deleteOnClick(event, title, url, author, image)}
                        
                    >
                        <StarFill height="27px" width="27px"/>
                    </button>
                    
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