import React from "react";
import { Col, Row, Container } from "../components/Grid";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          CONTENT HERE
        </Col>
        <Col size="md-6 sm-12">
          ADDITIONAL CONTENT HERE
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
