import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Article from "./pages/Article";
import SignupLogin from "./pages/SignupLogin";
import {Container} from "./components/Grid";
import CategoryContext from "./utils/CategoryContext";
import ArticleContext from "./utils/ArticleContext";


function App() {

  const [category, setCategory] = useState("General");
  const [articles, setArticles] = useState("");

  return (
    <Router>
      <Container fluid window>
        <ArticleContext.Provider value={{articles, setArticles}}>
        <CategoryContext.Provider value={{category, setCategory}}>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={SignupLogin} />
            <Route exact path="/article" component={Article} />
          </Switch>
        </CategoryContext.Provider>
        </ArticleContext.Provider>
      </Container>
    </Router>
  );
}

export default App;