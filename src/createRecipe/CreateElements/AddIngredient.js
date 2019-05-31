import React from "react";
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
  onChangeIngredient,
  options
}) {
  return (
    <StyledAddIngredient>
      <InputIngredient
        onSubmit={onSubmit}
        onChangeAmount={onChangeAmount}
        onChangeUnit={onChangeUnit}
        onChangeIngredient={onChangeIngredient}
        options={options}
      />
      <ul>
        {ingredients.map(ingredient => {
          return (
            <li key={ingredient.name}>
              {ingredient.amount} {ingredient.unit} {ingredient.name}
            </li>
          );
        })}
      </ul>
    </StyledAddIngredient>
  );
}
