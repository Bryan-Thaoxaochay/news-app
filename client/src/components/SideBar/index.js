import React, { useState, useEffect, useContext } from 'react';
import {Container, Col, Row} from "../Grid";
import DateTime from "../DateTime";
import { TimeToggler } from "../TimeToggler";
//import ArticleCategory from "../../utils/ArticleCategory";
import CategoryContext from "../../utils/CategoryContext";
import ArticlesBtn from "../ArticlesBtn"
import "./style.css"


function SideBar() {

    const { setCategory } = useContext(CategoryContext);

    const categories = [
        {
            name: "General",
            icon: "/assets/general.svg",
        },
        {
            name: "Technology",
            icon: "/assets/tech.svg",
        },
        {
            name: "Business",
            icon: "/assets/business.svg",
        },
        {
            name: "Health",
            icon: "/assets/health.svg",
        },
        {
            name: "Science",
            icon: "/assets/science.svg",
        },
        {
            name: "Entertainment",
            icon: "/assets/entertainment.svg",
        },
        {
            name: "Sports",
            icon: "/assets/sports.svg",
        }
    ]



const [category] = useState(categories);

return (
    <Container sideBar>
        <div className="card" id="catList">
            <div className="card-header catHeader">
                <h5>Categories</h5>
            </div>
            {category.map(categoryElement => (
                <li className="categorySearch">
                    <button
                        type="button"
                        className="btn btn-link category-link"
                        id={categoryElement.name}
                        value={categoryElement.name}
                        onClick={e => setCategory(e.target.value)}
                    >
                        <img src={categoryElement.icon} className={categoryElement.name + "-icon category-icons"} height="25px" width="25px"></img>
                        {categoryElement.name}
                    </button>
                </li>
            ))}
            <ArticlesBtn />
        </div>
    </Container>
)
};

export default SideBar;