import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <input placeholder="Search"></input>
      <a className="navbar-brand" href="/">
        NEWS APP
      </a>
      <button>Login</button>
      <button>Signup</button>
    </nav>
  );
}

export default Nav;