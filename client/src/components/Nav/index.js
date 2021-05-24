import React from "react";
import LoginButton from "../LoginBtn";
import LogoutButton from "../LogoutBtn";
import DateTime from "../DateTime";
import Search from "../Search"
import "./style.css"
import { TimeToggler } from "../TimeToggler";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <Search />
      <a className="navbar-brand" href="./">
      </a>
      <div className="image"><img src= "assets/logo.png" height= "90px" width= "90px"></img></div>
      <DateTime />
      <TimeToggler />
      <LoginButton></LoginButton>
      <LogoutButton></LogoutButton>
    </nav>
  );
}

export default Nav;

