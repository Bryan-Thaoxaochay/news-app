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
    }, [savedArticles])

    function loadArticles() {
        API.getSavedArticles()
            .then(res => setSavedArticles(res.data))
            // .then(console.log(savedArticles))
            .catch(err => console.log(err));
    }

    function deleteSavedArticles(id) {
        API.deleteSavedArticles(id)
            .then(res => loadArticles())
            .catch(err => console.log(err));
    }


    console.log(user)

    return (
        isAuthenticated && (
            <Container fluid>
                <Row>
                    <Col size="md-10">
                        <Jumbotron>
                            <h1>{user.nickname}'s Saved Articles</h1>
                            {savedArticles ? (
                                <ul>
                                    {savedArticles.map(article => (
                                        <li className="list-group-item">
                                            {/* <img className="img-fluid img-thumbnail" src={article.image}></img> */}
                                            <strong>
                                                <a href={article.url}>{article.title}</a>
                                            </strong>
                                            <DeleteBtn onClick={() => deleteSavedArticles(article._id)} />
                                        </li>

                                    ))}
                                </ul>
                            ) : (
                                <h3>{user.name} has not saved any articles</h3>
                            )}
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-2">
                        <Link to="/">← Back to Homepage</Link>
                    </Col>
                </Row>
            </Container>
        )

    );
}

export default Article;