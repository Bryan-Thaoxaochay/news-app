import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Carousel from "../components/Carousel";
import CategoryResults from "../components/CategoryResults";
import SideBar from "../components/SideBar";

const Main = () => {
  return (
    <Container fluid main>
      <Row>
        <Col size="4">
          <Container fluid content>
            <SideBar/>
          </Container>
        </Col>
        <Col size="8">
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