import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import RecipePreviewPage from "../RecipeList/RecipePreviewPage";
import CreatePage from "../CreateRecipe/CreatePage";
import GlobalStyle from "./GlobalStyle";
import Grid from "./Grid";
import Header from "../Header/Header";
import { postRecipe } from "../services";

function App() {
  const [recipes, setRecipes] = useState([]);

  const createRecipe = (data, history) => {
    postRecipe(data)
      .then(newRecipe => {
        setRecipes([...recipes, newRecipe]);
      })
      .catch(error => console.log(error));
  };

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Grid>
        <Header />
        <Switch>
          <Route exact path="/" component={RecipePreviewPage} />
          <Route
            path="/create"
            render={({ history }) => (
              <CreatePage onButtonClick={data => createRecipe(data, history)} />
            )}
          />
        </Switch>
        <Navigation />
      </Grid>
    </BrowserRouter>
  );
}

export default App;
