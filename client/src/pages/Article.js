import React, { useContext, useEffect } from 'react';
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import ArticleContext from "../utils/ArticleContext";

function Article() {

    //change this to user Data and pull in user data, using 
    //articles for now to build results
    const { articles, setArticles } = useContext(ArticleContext)
    console.log(articles)


    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        {articles ? (
                            <ul>
                                {articles.articles.map(article => (                    
                                    <li className="list-group-item">
                                        <strong>
                                        {article.title} from {article.publishedAt} 
                                        </strong>
                                    </li>

                                ))}
                            </ul>
                        ) : (
                            <h3>User has not saved any articles</h3>
                        )}
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}

export default Article;