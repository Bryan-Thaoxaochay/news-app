import React from "react";
import LoginButton from "../LoginBtn";
import LogoutButton from "../LogoutBtn";
import DateTime from "../DateTime";
import Search from "../Search"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Search />
      <a className="navbar-brand" href="/">
        NEWS APP
      </a>
      <DateTime />
      <LoginButton></LoginButton>
      <LogoutButton></LogoutButton>
    </nav>
  );
}

export default Nav;