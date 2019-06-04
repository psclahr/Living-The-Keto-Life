import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import RecipePreviewPage from "../RecipeList/RecipePreviewPage";
import CreatePage from "../CreateRecipe/CreatePage";
import GlobalStyle from "./GlobalStyle";
import Grid from "./Grid";
import Header from "../Header/Header";
import RecipeDetailPage from "../RecipeDetail/RecipeDetailPage";
import { getRecipes, postRecipe } from "../services";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes().then(data => setRecipes(data));
  }, []);

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
          <Route
            exact
            path="/"
            render={() => <RecipePreviewPage recipes={recipes} />}
          />
          <Route
            path="/create"
            render={({ history }) => (
              <CreatePage onButtonClick={data => createRecipe(data, history)} />
            )}
          />
          <Route
            path="/recipes/:_id"
            render={props => (
              <RecipeDetailPage props={props} recipes={recipes} />
            )}
          />
        </Switch>
        <Navigation />
      </Grid>
    </BrowserRouter>
  );
}

export default App;
