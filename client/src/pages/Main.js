import React from "react";
import { Col, Row, Container } from "../components/Grid";
import { TimeToggler } from "../components/TimeToggler/index.js";

const Main = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          
        </Col>
        <Col size="md-6 sm-12">
        <TimeToggler/>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;