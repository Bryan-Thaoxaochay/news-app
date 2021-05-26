import React, { useContext, useEffect } from 'react';
import ArticleContext from "../../utils/ArticleContext";
import CategoryContext from "../../utils/CategoryContext";
import { Col, Row, Container } from "../Grid";
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
        let concatDate = publicationDate.substring(0, 10);
        return concatDate;
    }

    function getTitle(title) {
        
        let t = title.substr(0, title.lastIndexOf("-"));
        return t
    }

    function getArticleDesc(article) {
        if (article.length === 0) {
            return "The contents of this article were not provided"
        } else {
            return article;
        }
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
                                        <Row>
                                            <Col size="11">
                                                <div className="title">
                                                <a className="text-break" href={article.url}>
                                                    {getTitle(article.title)}
                                                </a>
                                                </div>
                                            </Col>
                                            <Col size="1" >
                                                <FavButton
                                                    title={article.title}
                                                    url={article.url}
                                                    author={article.author}
                                                    image={article.urlToImage}

                                                />
                                            </Col>
                                        </Row>
                                        <h7 className="text-break card-date">
                                            {articleDateGet(article.publishedAt)}  •  {article.source.name}
                                        </h7>
                                    </h5>

                                    <div class="card-body">
                                        <img className="img-fluid articleImg img-thumbnail" src={article.urlToImage ? article.urlToImage : "./assets/placehold.png"}></img>

                                        <p className="card-text text-start text-break artText">{getArticleDesc(article.description)}...</p>
                                        {article.author ? (
                                            <h7 className="text-break authorDate">
                                                By: {article.author}
                                            </h7>
                                        ) : (
                                            <h7 className="text-break authorDate">By: <i>author not provided</i></h7>
                                        )}
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