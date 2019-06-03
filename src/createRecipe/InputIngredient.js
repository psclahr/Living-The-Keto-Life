import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  grid-template-areas:
    "h h h h"
    "a u i b";
  display: flex;
  justify-content: space-around;
`;
const StyledHeadline = styled.h3`
  grid-area: h;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  font-size: 20px;
`;
const StyledAmountInput = styled.input`
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 2px solid lightblue;
  height: 20px;
  grid-area: a;
  width: 60px;
  transition: all 1s ease;

  &:focus {
    outline: none;
    border-color: hotpink;
  }
`;
const StyledUnitSelect = styled.select`
  background: white;
  border: 2px solid lightblue;
  grid-area: u;
  width: 60px;
  transition: all 1s ease;

  &:focus {
    outline: none;
    border-color: hotpink;
  }
`;
const StyledIngredientInput = styled.input`
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 2px solid lightblue;
  height: 20px;
  grid-area: i;
  width: 180px;
  transition: all 1s ease;

  &:focus {
    outline: none;
    border-color: hotpink;
  }
`;

const StyledButton = styled.button`
  grid-area: b;
  background: lightblue;
  border-color: white;
  border-radius: 25px;
`;

export default function InputIngredient({
  onSubmit,
  onChangeAmount,
  onChangeUnit,
  onChangeIngredient,
  options,
  ingredientRef,
  ingredientAmountRef
}) {
  return (
    <>
      <StyledHeadline>Ingredients</StyledHeadline>
      <StyledForm ref={ingredientRef} onSubmit={onSubmit}>
        <StyledAmountInput
          name="amount"
          type="number"
          placeholder="Amount"
          autoComplete="off"
          onChange={onChangeAmount}
          required
          ref={ingredientAmountRef}
        />
        <StyledUnitSelect name="unit" onChange={onChangeUnit}>
          <option>gr</option>
          <option>kg</option>
          <option>l</option>
          <option>ml</option>
          <option>small</option>
          <option>large</option>
        </StyledUnitSelect>
        <StyledIngredientInput
          name="ingr"
          type="text"
          list="ingredients"
          placeholder="Ingredient"
          onChange={onChangeIngredient}
          autoComplete="off"
          required
        />
        <datalist id="ingredients">
          <option value={options[0]} />
          <option value={options[1]} />
          <option value={options[2]} />
          <option value={options[3]} />
          <option value={options[4]} />
          <option value={options[5]} />
          <option value={options[6]} />
          <option value={options[7]} />
          <option value={options[8]} />
          <option value={options[9]} />
        </datalist>
        <StyledButton type="submit">+</StyledButton>
      </StyledForm>
    </>
  );
}
