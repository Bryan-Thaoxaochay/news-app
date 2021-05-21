import React, { useContext, useEffect, useState } from 'react';
import { REACT_APP_NEWS_API_KEY } from "../../apikeys.json";
import ArticleContext from "../../utils/ArticleContext";
import CategoryContext from "../../utils/CategoryContext";
import { Col, Row } from "../Grid"

function CategoryResults() {

    const { category } = useContext(CategoryContext)
    const { articles, setArticles } = useContext(ArticleContext)

    console.log(articles)
    // const { articles, setArticles } = useState(exampleResult);

    useEffect(() => {
        loadArticles()
    }, [category]);

    function loadArticles() {
        fetch('https://newsapi.org/v2/top-headlines?language=en&category=' + category + '&apiKey=' + REACT_APP_NEWS_API_KEY)
            .then(res => res.json())
            .then(result => setArticles(result))
            .then(() => console.log(articles))
            .catch(err => console.log(err));
    }

    return (
            <Row>
                <Col size="md-6">
                    {articles ? (
                        <ul>
                            {articles.articles.map(article => (
                                <li className="list-group-item">
                                    <h2>{article.title}</h2>
                                </li>
                            ))}
                        </ul>
                    ) : (                        
                        <h3></h3>
                    )}
                </Col>
            </Row>
    );
}
// Issue with articles being rendered when page is refreshed, because articles isn't defined yet
export default CategoryResults;