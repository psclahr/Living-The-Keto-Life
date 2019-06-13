import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import RecipePreviewPage from "../Home/RecipePreviewPage";
import CreatePage from "../CreateRecipe/CreatePage";
import GlobalStyle from "./GlobalStyle";
import Grid from "./Grid";
import Header from "../Header/Header";
import RecipeDetailPage from "../RecipeDetail/RecipeDetailPage";
import { getRecipes, postRecipe, deleteRecipe } from "../services";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [currentPageTitle, setCurrentPageTitle] = useState("Recipe Book");

  useEffect(() => {
    getRecipes().then(data => setRecipes(data));
  }, []);

  async function createRecipe(data, history) {
    try {
      const newRecipe = await postRecipe(data);
      setRecipes([...recipes, newRecipe]);
      history.push(`/recipes/${newRecipe._id}`);
    } catch (err) {
      console.log(err);
    }
  }

  function deleteRecipeOnClick(recipe) {
    deleteRecipe(recipe._id);
    getRecipes().then(data => setRecipes(data));
  }

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
                onDeleteClick={recipe => deleteRecipeOnClick(recipe)}
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
