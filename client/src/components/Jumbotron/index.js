import React from "react";

function Jumbotron({ children }) {
  return (
    //added minHeight to allow for jumbotron to resize as articles are added
    <div
      style={{ minHeight: 100, clear: "both", paddingTop: 20, textAlign: "center" }}
      className="jumbotron border border-success"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
