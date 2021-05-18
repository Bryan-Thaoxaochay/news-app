import React from "react";
import LoginButton from "../LoginBtn";
import LogoutButton from "../LogoutBtn";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <input placeholder="Search"></input>
      <a className="navbar-brand" href="/">
        NEWS APP
      </a>
      <LoginButton></LoginButton>
      <LogoutButton></LogoutButton>
    </nav>
  );
}

export default Nav;