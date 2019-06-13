import React from "react";
import styled from "styled-components";
import RecipePreview from "./RecipePreview";
import { Link } from "react-router-dom";
import TrashIcon from "../icons/TrashIcon";

const Container = styled.div`
  position: relative;
`;

const StyledRecipeList = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  overflow-y: scroll;
`;

const StyledDeleteButton = styled.button`
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 32px;
  top: 32px;
`;

export default function RecipeList({ recipes, onClick, onDeleteClick }) {
  return (
    <StyledRecipeList>
      {recipes.map(recipe => {
        const target = `/recipes/${recipe._id}`;
        return (
          <Container key={recipe._id}>
            <StyledDeleteButton onClick={() => onDeleteClick(recipe)}>
              <TrashIcon />
            </StyledDeleteButton>
            <Link to={target}>
              <RecipePreview
                title={recipe.title}
                image={recipe.image}
                onClick={() => onClick(recipe.title)}
              />
            </Link>
          </Container>
        );
      })}
    </StyledRecipeList>
  );
}
