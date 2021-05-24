import React, { useContext, useEffect } from 'react';
import ArticleContext from "../../utils/ArticleContext";
import CategoryContext from "../../utils/CategoryContext";
import {Container,} from "../Grid"
import FavButton from "../FavButton";
import './style.css'


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
            <div class="card articlesDiv">
                    {articles ? (
                        <ul>
                            {articles.articles.map(article => (
                                <li className="list-group-item article">
                                    <Container fluid artCon>
                                    <div className="card articlesCard">
                                    <h5 className="card-header text-break title">
                                            <a href={article.url}>
                                            {article.title}
                                            </a>
                                    </h5>
                                    <div class="card-body">
                                            <img className="img-fluid articleImg img-thumbnail" src={article.urlToImage}></img>
                                            {article.author ? (
                                            <h7 className="text-break authorDate">
                                                {article.author}, {article.publishedAt}.
                                            </h7>
                                            ) : (
                                            <h7 className="text-break authorDate">
                                                {article.publishedAt}.
                                            </h7>
                                            )}          
                                            <p className="card-text text-start text-break artText">{article.description}.</p>
                                            <FavButton title={article.title} url={article.url} author={article.author}/> 
                                    </div>                              
                                    </div>
                                    </Container>
                                </li>
                            ))}
                        </ul>
                    ) : (                        
                        <h3></h3>
                    )}
            </div>
    );
}



export default CategoryResults;

/*

*/