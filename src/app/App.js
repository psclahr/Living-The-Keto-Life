import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import RecipePreviewPage from "../RecipeList/RecipePreviewPage";
import CreatePage from "../CreateRecipe/CreatePage";
import GlobalStyle from "./GlobalStyle";
import Grid from "./Grid";
import Header from "../Header/Header";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Grid>
        <Header />
        <Switch>
          <Route exact path="/" component={RecipePreviewPage} />
          <Route path="/create" component={CreatePage} />
        </Switch>
        <Navigation />
      </Grid>
    </BrowserRouter>
  );
}

export default App;
