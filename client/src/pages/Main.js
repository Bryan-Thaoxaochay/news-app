import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Carousel from "../components/Carousel";
import CategoryResults from "../components/CategoryResults";
import SideBar from "../components/SideBar";
import Profile from "../components/Profile";
import Nav from "../components/Nav";

const Main = () => {
  return (
    <Container fluid main>
      <Row topRow>
        <Col size="12">
            <Nav/>
            <Profile/>
        </Col>
      </Row>
      <Row botRow>
        <Col size="2">
          <Container fluid content>
            <SideBar/>
          </Container>
        </Col>
          <Col size="10">
            <Container fluid content>
            </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;

//<CategoryResults/>