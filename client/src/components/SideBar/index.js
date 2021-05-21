import React, { useState, useEffect } from 'react';
import ArticleCategory from "../../utils/ArticleCategory";
import API from "../../utils/API"
import "./style.css"

function SideBar() {

    const categories = ["Tech", "Business", "General", "Health", "Science", "Entertainment", "Sports"]
    const [category, setCategory] = useState(categories);


    function handleOnClick(selected) {
        setCategory(selected)

    };

    useEffect(() => {
        API.getCategory(category)
            .then(res => {
                console.log(res.data)
            });
        console.log(category)
    })


    ///Not sure if we want to do the Provider/context thing or not?  Maybe we just make API calls directly from this page instead?
    return (
        <ArticleCategory.Provider value={category}>
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ "width": '280px' }}>
                <ul>
                    {category.map(categoryElement => (
                        <li className="categorySearch" >
                            <button
                                type="button"
                                className="btn btn-link"
                                id={categoryElement}
                                value="technology"
                                onClick={() => handleOnClick("technology")}
                            >
                                {categoryElement}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </ArticleCategory.Provider>
    )
};

export default SideBar;