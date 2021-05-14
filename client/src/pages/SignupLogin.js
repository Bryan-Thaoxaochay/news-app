import React from "react";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

const SignupLogin = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <h2>Name</h2>
          <Input />
          <h2>Email</h2>
          <Input />
          <h2>Password</h2>
          <Input />
          <FormBtn />
        </Col>
      </Row>
    </Container>
  );
};

export default SignupLogin;