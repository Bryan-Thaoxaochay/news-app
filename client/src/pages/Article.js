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


    return (
        isAuthenticated && (
            <Container fluid>
                <Row>
                    <Col size="md-10">
                        <Jumbotron>
                            {/* <h1>Discussion Board</h1> */}
                            <h3>Welcome {user.name},</h3> 
                            <h4>Browse these articles that other users found interesting</h4>
                            {savedArticles ? (
                                <ul>
                                    {savedArticles.map(article => (
                                        <div className="card">
                                            <h5 className="card-header articleHeader">
                                                <DeleteBtn onClick={() => deleteSavedArticles(article._id)} />
                                                <a className="text-break title" href={article.url}>
                                                    {article.title}
                                                </a>
                                                <h7 className="text-break authorDate">
                                                    saved by {article.user}, on {article.date}.
                                            </h7>
                                            </h5>
      
                                        </div>
                                    ))}
                                </ul>
                            ) : (
                                <h4>No Saved Articles</h4>
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