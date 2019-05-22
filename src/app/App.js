import React from "react";
import Grid from "./Grid";
import RecipePreviewPage from "../recipeList/RecipePreviewPage";

function App() {
  return (
    <Grid>
      <p>Header</p>
      <RecipePreviewPage />
      <p>Navigation</p>
    </Grid>
  );
}

export default App;
