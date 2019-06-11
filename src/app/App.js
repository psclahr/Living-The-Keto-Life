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
  const [currentPageTitle, setCurrentPageTitle] = useState("Recipe Book");

  useEffect(() => {
    getRecipes().then(data => setRecipes(data));
  }, []);

  const createRecipe = (data, history) => {
    postRecipe(data)
      .then(newRecipe => {
        setRecipes([...recipes, newRecipe]);
        history.push(`/recipes/${recipes[recipes.length - 1]._id}`);
      })
      .catch(error => console.log(error));
  };

  function handleBookClick() {
    setCurrentPageTitle("Recipe Book");
  }

  function handleAddClick() {
    setCurrentPageTitle("Create A New Recipe");
  }

  function handleClickOnRecipe(title) {
    setCurrentPageTitle(title);
  }

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Grid>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <RecipePreviewPage
                recipes={recipes}
                onClick={handleClickOnRecipe}
              />
            )}
          />
          <Route
            path="/create"
            render={({ history }) => (
              <CreatePage onButtonClick={data => createRecipe(data, history)} />
            )}
          />
          <Route
            path="/recipes/:id"
            render={props => <RecipeDetailPage {...props} recipes={recipes} />}
          />
        </Switch>
        <Navigation
          onClickBook={handleBookClick}
          onClickAdd={handleAddClick}
          currentPageTitle={currentPageTitle}
        />
      </Grid>
    </BrowserRouter>
  );
}

export default App;
