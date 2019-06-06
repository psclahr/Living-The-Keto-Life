import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Ingredient from "./Ingredients";
import Steps from "./Steps";
import AnalyseNutrition from "./AnalyseNutritions";

const Grid = styled.div`
  display: grid;
  grid-template-rows: 264px auto auto 300px;
  overflow-y: scroll;
`;

export default function RecipeDetailPage({ match, recipes }) {
  const targetRecipe =
    recipes &&
    recipes.find(recipe => {
      return recipe._id === match.params.id;
    });

  if (!targetRecipe) {
    return null;
  }

  return (
    <Grid>
      <Header recipe={targetRecipe} />
      <Ingredient recipe={targetRecipe} />
      <Steps recipe={targetRecipe} />
      <AnalyseNutrition recipe={targetRecipe} />
    </Grid>
  );
}
