import React, { useContext, useEffect } from 'react';
import ArticleContext from "../../utils/ArticleContext";
import CategoryContext from "../../utils/CategoryContext";
import { Col, Row } from "../Grid"
import FavButton from "../FavButton";


function CategoryResults() {

    const { category } = useContext(CategoryContext)
    const { articles, setArticles } = useContext(ArticleContext)

    useEffect(() => {
        loadArticles()
    }, [category]);

    function loadArticles() {
        // fetch('https://newsapi.org/v2/top-headlines?language=en&category=' + category + '&apiKey=' + process.env.REACT_APP_NEWS_API_KEY)
        fetch('/api/articles/topheadlines/' + category)
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
                                    <FavButton 
                                    title={article.title}
                                    url={article.url}
                                    author={article.author}/>
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

function CategoryStack(props){
    <div className="catStack">

    </div>
}

export function GeneraList(props){

}

export function TechList(props){

}

export function HealthList(props){

}

export function SciList(props){

}

export function BizList(props){

}

export function SportsList(props){

}

export function EList(props){
    
}

export default CategoryResults;