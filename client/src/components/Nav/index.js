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
      <div id="navInfo">
        <img className="img-fluid" src= "assets/logo.png" height= "90px" width= "90px"></img>
        <DateTime />
        <LoginButton></LoginButton>
        <LogoutButton></LogoutButton>
      </div>
      <TimeToggler />
      <Search />
    </nav>
  );
}

export default Nav;

/* 
      <a className="navbar-brand" href="./">
      </a>
*/