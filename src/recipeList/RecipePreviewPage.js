import React from "react";
import styled from "styled-components";
import RecipePreview from "./RecipePreview";
import { Link } from "react-router-dom";

const StyledRecipeList = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  overflow-y: scroll;
`;

export default function RecipeList({ recipes, onClick }) {
  return (
    <StyledRecipeList>
      {recipes.map(recipe => {
        const target = `/recipes/${recipe._id}`;
        return (
          <Link to={target} key={recipe._id}>
            <RecipePreview
              title={recipe.title}
              image={recipe.image}
              onClick={() => onClick(recipe.title)}
            />
          </Link>
        );
      })}
    </StyledRecipeList>
  );
}
