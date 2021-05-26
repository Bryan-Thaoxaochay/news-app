import React from "react";
import { Col, Row, Container } from "../components/Grid";
import CategoryResults from "../components/CategoryResults";
import SideBar from "../components/SideBar";
import Profile from "../components/Profile";
import Nav from "../components/Nav";
import "./style.css";


const Main = () => {
  return (
    <Container fluid main>
      <Row topRow>
        <Col size="12">
            <Nav/>
            {/* <Profile/> */}
        </Col>
      </Row>
      <Row botRow>
        <Col size="3" className="side-Bar">
            <SideBar/>
        </Col>
          <Col size="9">
            <Container fluid content>
              <CategoryResults />
            </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;

//<CategoryResults/>