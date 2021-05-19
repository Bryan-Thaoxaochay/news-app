import React, { useState, useEffect } from 'react';
import { REACT_APP_NEWS_API_KEY } from "../../apikeys.json";
import ArticleContext from "../../utils/ArticleContext";

function SideBar() {
    const [articles, setArticles] = useState({});

    // useEffect(() => {
    //     loadArticles("");
    // }, [])

    function loadArticles(category) {
        fetch('https://newsapi.org/v2/top-headlines?language=en&category=' + category + '&apiKey=' + REACT_APP_NEWS_API_KEY)
            .then(res => res.json())
            .then(result => setArticles(result))
            .then(() => console.log(articles))
            .catch(err => console.log(err));
    }

    return (
        <ArticleContext.Provider value={articles}>
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ "width": '280px' }}>
                <ul>
                    <li className="nav-item">
                        <button
                            type="button"
                            className="btn btn-link"
                            value="technology"
                            onClick={e => loadArticles(e.target.value)}
                        >
                            Tech
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            type="button"
                            className="btn btn-link"
                            value="business"
                            onClick={e => loadArticles(e.target.value)}
                        >
                            Business
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            type="button"
                            className="btn btn-link"
                            value="general"
                            onClick={e => loadArticles(e.target.value)}
                        >
                            General
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            type="button"
                            className="btn btn-link"
                            value="health"
                            onClick={e => loadArticles(e.target.value)}
                        >
                            Health
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            type="button"
                            className="btn btn-link"
                            value="science"
                            onClick={e => loadArticles(e.target.value)}
                        >
                            Science
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            type="button"
                            className="btn btn-link"
                            value="entertainment"
                            onClick={e => loadArticles(e.target.value)}
                        >
                            Entertainment
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            type="button"
                            className="btn btn-link"
                            value="sports"
                            onClick={e => loadArticles(e.target.value)}
                        >
                            Sports
                        </button>
                    </li>
                </ul>
            </div>
        </ArticleContext.Provider>
    )
};

export default SideBar;