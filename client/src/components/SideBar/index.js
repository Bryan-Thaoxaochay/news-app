import React, { useState, useEffect } from 'react';
import ArticleCategory from "../../utils/ArticleCategory";
import API from "../../utils/API"

function SideBar() {

    const [category, setCategory] = useState({
        category: ""
    });


    function handleOnClick(selected) {
        setCategory(selected)

    };

    useEffect(() => {
        API.getCategory(category)
        .then(res =>{
            console.log(res.data)
        });
        console.log(category)
    })


  ///Not sure if we want to do the Provider/context thing or not?  Maybe we just make API calls directly from this page instead?
    return (
        <ArticleCategory.Provider value={category}>
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ "width": '280px' }}>
                <ul>
                    <li className="nav-item">
                        <button
                            type="button"
                            className="btn btn-link"
                            value="technology"
                            onClick={()=>handleOnClick("technology")}
                        >
                            Tech
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            type="button"
                            className="btn btn-link"
                            value="technology"
                            onClick={() => handleOnClick("business")}
                        >
                            Business
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            type="button"
                            className="btn btn-link"
                            value="technology"
                            onClick={() => handleOnClick("general")}
                        >
                            General
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            type="button"
                            className="btn btn-link"
                            value="technology"
                            onClick={() => handleOnClick("health")}
                        >
                            Health
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            type="button"
                            className="btn btn-link"
                            value="technology"
                            onClick={() => handleOnClick("science")}
                        >
                            Science
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            type="button"
                            className="btn btn-link"
                            value="technology"
                            onClick={() => handleOnClick("entertainment")}
                        >
                            Entertainment
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            type="button"
                            className="btn btn-link"
                            value="technology"
                            onClick={() => handleOnClick("sports")}
                        >
                            Sports
                        </button>
                    </li>
                </ul>
            </div>
        </ArticleCategory.Provider>
    )
};

export default SideBar;