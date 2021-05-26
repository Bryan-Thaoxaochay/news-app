import React from "react";

function Jumbotron({ children }) {
  return (
    //added minHeight to allow for jumbotron to resize as articles are added
    <div
      style={{ minHeight: 50, clear: "both", paddingTop: 20, textAlign: "center" }}
      className="jumbotron border border-dark"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
