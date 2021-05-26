import React, { useContext, useEffect } from 'react';
import ArticleContext from "../../utils/ArticleContext";
import CategoryContext from "../../utils/CategoryContext";
import { Container } from "../Grid"
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

    function articleDateGet(publicationDate) {
        console.log(publicationDate);
        let concatDate = publicationDate.substring(0, 10);
        return concatDate;
    }



    return (
        <div class="card articlesDiv">
            {articles ? (
                <ul id="artList">
                    {articles.articles.map(article => (
                        <li className="list-group-item article">
                            <Container fluid artCon>
                                <div className="card articlesCard">
                                    <h5 className="card-header articleHeader">
                                        <FavButton
                                            title={article.title}
                                            url={article.url}
                                            author={article.author}
                                            image={article.urlToImage}
                                        />
                                        <a className="text-break title" href={article.url}>
                                            {article.title}
                                        </a>
                                    </h5>

                                    <div class="card-body">
                                        <img className="img-fluid articleImg img-thumbnail" src={article.urlToImage ? article.urlToImage : "./assets/placehold.png"}></img>
                                        {article.author ? (
                                            <h7 className="text-break authorDate">
                                                {article.author}, {articleDateGet(article.publishedAt)}
                                            </h7>
                                        ) : (
                                            <h7 className="text-break authorDate">
                                                {articleDateGet(article.publishedAt)}
                                            </h7>
                                        )}
                                        <p className="card-text text-start text-break artText">{article.description}..</p>

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