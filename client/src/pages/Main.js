import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Carousel from "../components/Carousel";
import { TimeToggler } from "../components/TimeToggler/index.js";
// import Carousel from ('../Carousel');

const Main = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <TimeToggler ></TimeToggler>
        </Col>
        <Col size="md-6 sm-12">
        <Container fluid className="content">
          <Carousel></Carousel>
        </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;