import React from "react";
import Navigation from "../Navigation/Navigation";
import RecipePreviewPage from "../recipeList/RecipePreviewPage";
import GlobalStyle from "./GlobalStyle";
import Grid from "./Grid";

function App() {
  return (
    <>
      <GlobalStyle />
      <Grid>
        <p>Header</p>
        <RecipePreviewPage />
        <Navigation />
      </Grid>
    </>
  );
}

export default App;
