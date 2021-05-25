import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Article from "./pages/Article";
import SignupLogin from "./pages/SignupLogin";
import {Container} from "./components/Grid";
import CategoryContext from "./utils/CategoryContext";
import ArticleContext from "./utils/ArticleContext";
import SearchContext from "./utils/SearchContext";



function App() {

  const [category, setCategory] = useState("General");
  const [articles, setArticles] = useState("");
  const [search, setSearch] = useState();

  return (
    <Router>
      <Container fluid window>
        <ArticleContext.Provider value={{articles, setArticles}}>
        <CategoryContext.Provider value={{category, setCategory}}>
          <SearchContext.Provider value={{search, setSearch}}>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={SignupLogin} />
            <Route exact path="/saved-articles" component={Article} />
          </Switch>
          </SearchContext.Provider>
        </CategoryContext.Provider>
        </ArticleContext.Provider>
      </Container>
    </Router>
  );
}

export default App;