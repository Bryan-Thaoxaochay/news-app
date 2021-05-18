import React, {useState, useEffect} from 'react';
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API"

function Article() {

    const [category, setCategory] = useState("business")

    //this API call gets the link for top stories in the US
    API.getArticles()
    .then(res =>{
        console.log(res.data)
    });


    //this API call gets the link for articles related to the category selected
    //currently, it's set to "business" but setCategory will dynamically change it 
    API.getCategory(category)
    .then(res =>{
        console.log(res.data)
    });


    return (
        <Container fluid>
            <Row>
            <Col size="md-12">
                <Jumbotron>
                <h1>404 Page Not Found</h1>
                <h1>
                    <span role="img" aria-label="Face With Rolling Eyes Emoji">
                    🙄
                    </span>
                </h1>
                </Jumbotron>
            </Col>
            </Row>
        </Container>
    );
}

export default Article;