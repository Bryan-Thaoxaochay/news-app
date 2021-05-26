import React from "react";
import LoginButton from "../LoginBtn";
import LogoutButton from "../LogoutBtn";
import DateTime from "../DateTime";
import {Container, Row, Col} from "../Grid";
import Search from "../Search"
import "./style.css"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div id="navInfo">
        <img className="img-fluid" src= "assets/logo.png" height= "75px" width= "75px"></img>
        <div id="loginDiv">
        <DateTime />
        <LoginButton/>
        <LogoutButton/>
        </div>
      </div>
      <Search />
    </nav>
  );
}

export default Nav;

/* 
      <a className="navbar-brand" href="./">
      </a>
*/