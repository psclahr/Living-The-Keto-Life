import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Ingredients from "./Ingredients";
import Steps from "./Steps";
import AnalyseNutrition from "./AnalyseNutritions";

const Container = styled.div`
  display: grid;
  grid-template-rows: 264px auto auto auto;
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
    <Container>
      <Header recipe={targetRecipe} />
      <Ingredients recipe={targetRecipe} />
      <Steps recipe={targetRecipe} />
      <AnalyseNutrition recipe={targetRecipe} />
    </Container>
  );
}
