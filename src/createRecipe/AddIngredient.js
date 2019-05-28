import React from "react";
import styled from "styled-components";
import IngredientList from "../RecipeList/IngredientList";
import InputIngredient from "./InputIngredient";

const StyledAddIngredient = styled.section`
  margin-top: 20px;
`;

export default function AddIngredient() {
  return (
    <StyledAddIngredient>
      <InputIngredient />
      List
    </StyledAddIngredient>
  );
}
