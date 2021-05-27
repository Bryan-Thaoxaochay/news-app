import React, { useState, useEffect } from 'react';
import { Col, Row, Container } from "../components/Grid";
import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";

function Article() {

    const [savedArticles, setSavedArticles] = useState();
    const { user, isAuthenticated } = useAuth0();


    useEffect(() => {
        loadArticles()
    });

    function loadArticles() {
        API.getSavedArticles()
            .then(res => setSavedArticles(res.data))
            // .then(console.log(savedArticles))
            .catch(err => console.log(err));
    };

    function deleteSavedArticles(id) {
        API.deleteSavedArticles(id)
            .then(res => loadArticles())
            .catch(err => console.log(err));
    };

    function articleDateGet(publicationDate) {
        let concatDate = publicationDate.substring(0, 10);
        return concatDate;
    }


    return (
        isAuthenticated && (
            <Container fluid>
                <Row>
                    <Col size="md-10">
                        <Jumbotron>

                            {/* <h1>Discussion Board</h1> */}
                            <h3>Welcome {user.name},</h3>
                            <h4>Browse these articles that other users found interesting</h4>

                        </Jumbotron>
                        <Row>
                            <Col size="md-2">
                                <Link to="/">← Back to Home</Link>
                            </Col>
                        </Row>
                        {savedArticles ? (
                            <ul id="artList">
                                {savedArticles.map(article => (
                                    <li className="list-group-item article">
                                        <Container fluid artCon>
                                            <div className="card articlesCard">
                                                <h5 className="card-header articleHeader">
                                                    <Row>
                                                        <Col size="11">
                                                            <div className="title">
                                                                <a className="text-break" href={article.url}>
                                                                    {article.title}
                                                                </a>
                                                            </div>
                                                        </Col>
                                                        <Col size="1" >
                                                            <DeleteBtn onClick={() => deleteSavedArticles(article._id)} />
                                                        </Col>
                                                    </Row>
                                                </h5>
                                                <div class="card-body">

                                                    <h7 className="text-break authorDate">
                                                        saved by {article.user}, on {articleDateGet(article.date)}
                                                    </h7>
                                                </div>
                                            </div>
                                        </Container>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <h4>No Saved Articles</h4>
                        )}
                    </Col>
                </Row>
            </Container>
        )

    );
}

export default Article;