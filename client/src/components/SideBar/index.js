import React, { useState, useEffect, useContext } from 'react';
import {Container} from "../Grid";
//import ArticleCategory from "../../utils/ArticleCategory";
import CategoryContext from "../../utils/CategoryContext";
import "./style.css"


function SideBar() {
    const { setCategory } = useContext(CategoryContext);

    const categories = ["Technology", "Business", "General", "Health", "Science", "Entertainment", "Sports"]
    const [category] = useState(categories);

    return (
       <Container>
            <ul>
                {category.map(categoryElement => (
                    <li className="categorySearch" >
                        <button
                            type="button"
                            className="btn btn-link"
                            id={categoryElement}
                            value={categoryElement}
                            onClick={e => setCategory(e.target.value)}
                        >
                            {categoryElement}
                        </button>
                    </li>
                ))}
            </ul>
        </Container>
    )
};

export default SideBar;