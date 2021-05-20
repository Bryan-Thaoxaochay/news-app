import React from "react";
import { Col, Row, Container } from "../components/Grid";
import { TimeToggler } from "../components/TimeToggler/index.js";
// import Carousel from ('../Carousel');

const Main = () => {
  return (
    <Container fluid className="container">
      <Row>
        <Col size="md-6">
          <TimeToggler ></TimeToggler>
        </Col>
        <Col size="md-6 sm-12">
        <Container fluid className="container content"></Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;