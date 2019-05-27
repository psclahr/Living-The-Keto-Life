import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import RecipePreviewPage from "../recipeList/RecipePreviewPage";
import CreatePage from "../createRecipe/CreatePage";
import GlobalStyle from "./GlobalStyle";
import Grid from "./Grid";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Grid>
        <p>Header</p>
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
