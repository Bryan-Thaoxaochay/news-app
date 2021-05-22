import React from "react";
import LoginButton from "../LoginBtn";
import LogoutButton from "../LogoutBtn";
import DateTime from "../DateTime";
import Search from "../Search"
import "./style.css"
import { TimeToggler } from "../TimeToggler";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <Search />
      <a className="navbar-brand" href="./">
      </a>
      <img src= "assets/logo.png" height= "100px" width= "100px"></img>
      <DateTime />
      <TimeToggler />
      <LoginButton></LoginButton>
      <LogoutButton></LogoutButton>
    </nav>
  );
}

export default Nav;

