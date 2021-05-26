import React from "react";
import LoginButton from "../LoginBtn";
import LogoutButton from "../LogoutBtn";
import {Container, Row, Col} from "../Grid";
import Search from "../Search"
import "./style.css"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div id="navInfo">
        <img className="img-fluid" src= "assets/logo.png" height= "75px" width= "75px"></img>
        <LoginButton></LoginButton>
        <LogoutButton></LogoutButton>
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