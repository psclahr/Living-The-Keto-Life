import React from "react";
import styled from "styled-components";
import RecipePreview from "./RecipePreview";

const StyledRecipeList = styled.div``;

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
