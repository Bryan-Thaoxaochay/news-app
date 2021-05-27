import React from 'react';
import { Link } from "react-router-dom"
import { useAuth0 } from '@auth0/auth0-react';

function ArticlesBtn() {
    const { isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <Link to="/saved-articles">
                <button
                    type="button"
                    className="btn btn-link category-link category-btn"
                >
                    <img src="/assets/star-fill.svg" className="Saved-icon category-icons" height="25px" width="25px"></img>
                Saved Articles
            </button>
            </Link>

        )
    );
};

export default ArticlesBtn;