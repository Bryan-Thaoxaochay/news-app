import React, { useState, useContext, useEffect } from 'react';
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn"
import API from "../utils/API"

function Article() {

    const [savedArticles, setSavedArticles] = useState();

    useEffect(()=> {
        loadArticles()
    }, [])

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




    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        {savedArticles ? (
                            <ul>
                                {savedArticles.map(article => (
                                    <li className="list-group-item">
                                        {/* <img className="img-fluid img-thumbnail" src={article.image}></img> */}
                                        <strong>
                                            <a href={article.url}>{article.title}</a> saved on {article.date}
                                        </strong>
                                        <DeleteBtn onClick={() => deleteSavedArticles(article._id)} />
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