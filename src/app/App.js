import React from "react";
import Grid from "./Grid";
import Navigation from "./Navigation";
import RecipePreviewPage from "../recipeList/RecipePreviewPage";

function App() {
  return (
    <Grid>
      <p>Header</p>
      <RecipePreviewPage />
      <Navigation />
    </Grid>
  );
}

export default App;
