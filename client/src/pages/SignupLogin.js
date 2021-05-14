import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";

function SignupLogin() {

  // const [users, setUsers] = useState([]);
  const [formObject, setFormObject] = useState({})

  // function loadUsers() {
  //   API.getUsers()
  //     .then(res => setUsers(res.data))
  //     .catch(err => console.log(err));
  // }

  // Need to access id of user who logs in
  function handleLogin(event) {
    event.preventDefault();
    if (formObject.emailOld && formObject.passwordOld) {
      API.getUser({
        email: formObject.emailOld,
        password: formObject.passwordOld
      })
        .catch(err => console.log(err));
    }
  };

  function handleSignUp(event) {
    event.preventDefault();
    if (formObject.nameNew && formObject.emailNew && formObject.passwordNew) {
      API.createUser({
        name: formObject.nameNew,
        email: formObject.emailNew,
        password: formObject.passwordNew
      })
        .catch(err => console.log(err));
    }
  };

  return (
    <Container fluid>
      {/* Log In Form */}
      <Row>
        <Col size="md-12">
          <h2>Log In</h2>
          <Input name='emailOld' placeholder='Email' />
          <Input name='passwordOld' placeholder='Password' />
          <FormBtn onClick={handleLogin}>
            Log In
          </FormBtn>
        </Col>
      </Row>

      {/* Sign Up Form */}
      <Row>
        <Col size="md-12">
          <h2>Sign Up</h2>
          <Input name='nameNew' placeholder='Full Name (John Doe)' />
          <Input name='emailNew' placeholder='Email (newsisawesome@news.com)' />
          <Input name='passwordNew' placeholder='Password must be at least 8 characters' />
          <FormBtn onClick={handleSignUp}>
            Sign Up
          </FormBtn>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupLogin;