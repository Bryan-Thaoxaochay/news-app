import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Article from "./pages/Article";
import SignupLogin from "./pages/SignupLogin";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import Profile from "./components/Profile";



function App() {
  return (
    <Router>
      <div>
          <Nav />
          <SideBar />
          <Profile />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={SignupLogin} />
            <Route exact path="/article" component={Article} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;