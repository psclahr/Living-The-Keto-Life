import React, { useState } from "react";
import styled from "styled-components";
import InputIngredient from "../InputIngredient";

const StyledAddIngredient = styled.section`
  margin-top: 20px;
`;

export default function AddIngredient({ ingredients, onSubmit }) {
  return (
    <StyledAddIngredient>
      <InputIngredient onSubmit={onSubmit} />
      <ul>
        {ingredients.map(ingredient => {
          return <li>{ingredient}</li>;
        })}
      </ul>
    </StyledAddIngredient>
  );
}
