import React from "react";
import styled from "styled-components";
import RecipePreview from "./RecipePreview";

const StyledRecipeList = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  overflow-y: scroll;
`;

export default function RecipeList({ recipes }) {
  return (
    <StyledRecipeList>
      {recipes.map(recipe => (
        <RecipePreview
          key={recipe.title}
          title={recipe.title}
          image={recipe.image}
        />
      ))}
    </StyledRecipeList>
  );
}
