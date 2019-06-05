import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Ingredient from "./Ingredients";
import Steps from "./Steps";
import AnalyseNutrition from "./AnalyseNutritions";

const Grid = styled.div`
  display: grid;
  grid-template-rows: 200px auto auto 300px;
  overflow-y: scroll;
`;

export default function RecipeDetailPage({ props, recipes }) {
  const targetRecipe = recipes.filter(recipe => {
    return recipe._id === props.match.params._id;
  });

  return (
    <Grid>
      <Header targetRecipe={targetRecipe} />
      <Ingredient />
      <Steps />
      <AnalyseNutrition />
    </Grid>
  );
}
