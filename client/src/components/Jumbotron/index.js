import React from "react";

function Jumbotron({ children }) {
  return (
    //added minHeight to allow for jumbotron to resize as articles are added
    <div
      style={{ minHeight: 560, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron border border-success"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
