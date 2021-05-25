import { PromiseProvider } from "mongoose";
import React from "react";
import "./style.css";

// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a bootstrap container without worrying about class names
export function Container({ fluid, content, window, main, navCon, headCon, artCon, navInfo, children }) {
  return <div className={`container${fluid ? "-fluid" : ""} ${content ? "content" : ""} ${window ? "window" : ""} ${main ? "main" : ""} ${navCon ? "navCon" : ""} ${headCon ? "headCon" : ""} ${artCon ? "artCon" : ""}`} id={`${navInfo ? "navInfo" : ""}`}>{children}</div>
}

// This Row component lets us use a bootstrap row without having to think about class names
export function Row({ topRow, botRow, children }) {
  return <div className={`row ${topRow ? "topRow" : ""} ${botRow ? "botRow" : ""}`}>{children}</div>;
}

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")}z
    >
      {children}
    </div>
  );
}