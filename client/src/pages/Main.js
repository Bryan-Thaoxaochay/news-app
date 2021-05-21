import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Carousel from "../components/Carousel";
import CategoryResults from "../components/CategoryResults";
import SideBar from "../components/SideBar";

const Main = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <SideBar/>
        </Col>
        <Col size="md-6 sm-12">
          <Container fluid content>
            <Carousel></Carousel>
          </Container>
          <CategoryResults/>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;