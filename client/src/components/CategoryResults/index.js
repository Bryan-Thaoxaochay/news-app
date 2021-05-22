import React, { useContext, useEffect } from 'react';
import ArticleContext from "../../utils/ArticleContext";
import CategoryContext from "../../utils/CategoryContext";
import {Container} from "../Grid"
require('dotenv').config();

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
        <Container fluid content>
            {articles.articles.map(article => (
            <div className="card pageCard" id="genCard">
                <h2>{article.title}</h2>
                <h4>{article.author}. {article.publishedAt}. {article.url}. {article.urlToImage}</h4>
                <p>{article.description}</p>
            </div>
            ))}
        </Container>
    )
}

/* <Row><p>{article.title}. {article.author}. {article.publishedAt}. {article.description}. {article.url}. {article.urlToImage}</p>  */

/* export function CategoryStack(props){
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
     
} */

export default CategoryResults;