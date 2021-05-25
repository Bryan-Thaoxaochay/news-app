import React from "react";
import LoginButton from "../LoginBtn";
import LogoutButton from "../LogoutBtn";
import {Container, Row, Col} from "../Grid";
import DateTime from "../DateTime";
import Search from "../Search"
import "./style.css"
import { TimeToggler } from "../TimeToggler";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="img-fluid"><img src= "assets/logo.png" height= "90px" width= "90px"></img></div>
      <a className="navbar-brand" href="./">
      </a>
      <Container content navInfo>
      <DateTime />
      <LoginButton></LoginButton>
      <LogoutButton></LogoutButton>
      </Container>
      <TimeToggler />
      <Search />
    </nav>
  );
}

export default Nav;

