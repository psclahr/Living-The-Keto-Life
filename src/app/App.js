import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import RecipePreviewPage from "../Home/RecipePreviewPage";
import CreatePage from "../CreateRecipe/CreatePage";
import EditPage from "../CreateRecipe/EditPage";
import GlobalStyle from "./GlobalStyle";
import Grid from "./Grid";
import Header from "../Header/Header";
import RecipeDetailPage from "../RecipeDetail/RecipeDetailPage";
import { getRecipes, postRecipe, patchRecipe, deleteRecipe } from "../services";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [currentPageTitle, setCurrentPageTitle] = useState("Recipe Book");
  const [showModal, setShowModal] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [editRecipe, setEditRecipe] = useState([]);

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

  async function editedRecipe(data, history) {
    try {
      const newEditedRecipe = await patchRecipe(data, data._id);
      const index = recipes.findIndex(
        recipe => recipe._id === newEditedRecipe._id
      );
      console.log(index);
      setRecipes([
        ...recipes.slice(0, index),
        newEditedRecipe,
        ...recipes.slice(index + 1)
      ]);
      history.push(`/recipes/${newEditedRecipe._id}`);
      setShowEdit(false);
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteRecipeOnClick(recipe) {
    try {
      const index = recipes.indexOf(recipe);
      await deleteRecipe(recipe._id);
      setRecipes([...recipes.slice(0, index - 1), ...recipes.slice(index)]);
      setShowModal(false);
    } catch (err) {
      console.log(err);
    }
  }

  function handleEditClick(recipe) {
    setShowEdit(true);
    setEditRecipe(recipe);
  }

  function handleBackClick() {
    setShowEdit(false);
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

  function handleOpenModal() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
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
            render={({ history }) => (
              <>
                {showEdit ? (
                  <EditPage
                    editRecipe={editRecipe}
                    onBackClick={handleBackClick}
                    onButtonClickToEdit={data => editedRecipe(data, history)}
                  />
                ) : (
                  <RecipePreviewPage
                    recipes={recipes}
                    onClick={handleClickOnRecipe}
                    onDeleteClick={recipe => deleteRecipeOnClick(recipe)}
                    onEditClick={recipe => handleEditClick(recipe)}
                    onOpenModal={handleOpenModal}
                    onCloseModal={handleCloseModal}
                    showModal={showModal}
                  />
                )}
              </>
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
