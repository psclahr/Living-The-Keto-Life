import React, { useState } from "react";
import styled from "styled-components";
import InputIngredient from "../InputIngredient";

const StyledAddIngredient = styled.section`
  margin-top: 20px;
`;

export default function AddIngredient({
  ingredients,
  onSubmit,
  onChangeAmount,
  onChangeUnit,
  onChangeIngredient
}) {
  return (
    <StyledAddIngredient>
      <InputIngredient
        onSubmit={onSubmit}
        onChangeAmount={onChangeAmount}
        onChangeUnit={onChangeUnit}
        onChangeIngredient={onChangeIngredient}
      />
      <ul>
        {ingredients
          .map(ingredient => ingredient.name)
          .map(ingredient => {
            return <li key={ingredient}>{ingredient}</li>;
          })}
      </ul>
    </StyledAddIngredient>
  );
}
