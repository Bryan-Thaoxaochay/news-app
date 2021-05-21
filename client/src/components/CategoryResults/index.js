import React, { useContext, useEffect } from 'react';
import { REACT_APP_NEWS_API_KEY } from "../../apikeys.json";
import ArticleContext from "../../utils/ArticleContext";
import CategoryContext from "../../utils/CategoryContext";
import { Col, Row } from "../Grid"
require('dotenv').config();

function CategoryResults() {

    const { category } = useContext(CategoryContext)
    const { articles, setArticles } = useContext(ArticleContext)

    console.log(articles)
    // const { articles, setArticles } = useState(exampleResult);

    useEffect(() => {
        loadArticles()
    }, [category]);

    // console.log(process.env.REACT_APP_NEWS_API_KEY)

    function loadArticles() {
        fetch('https://newsapi.org/v2/top-headlines?language=en&category=' + category + '&apiKey=' + process.env.REACT_APP_NEWS_API_KEY)
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
                                    <p>{article.title}. {article.author}. {article.publishedAt}. {article.description}. {article.url}. {article.urlToImage}</p>
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
export default CategoryResults;