import React, {Component} from "react";
import LoginButton from "../LoginBtn";
import LogoutButton from "../LogoutBtn";
import DateTime from "../DateTime";
import {TimeToggler} from "../TimeToggler";
import {Container, Row, Col} from "../Grid";
import Search from "../Search"
import "./style.css"

class Nav extends Component {

  constructor(props){
    super(props);
    this.state = {
      isMobile: false 
    };
    this.updateSizeState = this.updateSizeState.bind(this);
  }
  componentDidMount() {
    this.updateSizeState();
    window.addEventListener("resize", this.updateSizeState);
  };
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateSizeState);
  };
  updateSizeState() {
    this.setState({ isMobile: window.innerWidth < 768 });
  };

  render() {
    const isMobile = this.state.isMobile;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div id="navInfo">
          <img className="img-fluid logo" src= "assets/logo.png" height= "75px" width= "75px"></img>
          <div id="loginDiv">
          <DateTime />
          <LoginButton/>
          <LogoutButton/>
          </div>
        </div>
        <div id="navSplit"/>
        <div id="navSearch">
          {isMobile ? (
          <span></span>
          ) : (
          <TimeToggler/>
          )}
          <Search />
        </div>
      </nav>
    )
  }
}

export default Nav;

/* 
      <a className="navbar-brand" href="./">
      </a>
*/