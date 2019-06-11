import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
`;
const StyledAmountInput = styled.input`
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 2px solid rgba(120, 218, 172, 0.3);

  width: 70px;
  transition: all 1s ease;

  &:focus {
    outline: none;
    border-color: rgba(120, 218, 172, 1);
  }
`;
const StyledUnitSelect = styled.select`
  background: white;
  border: 2px solid rgba(120, 218, 172, 0.3);
  width: 90px;
  transition: all 1s ease;

  &:focus {
    outline: none;
    border-color: rgba(120, 218, 172, 1);
  }
`;
const StyledIngredientInput = styled.input`
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 2px solid rgba(120, 218, 172, 0.3);
  width: 180px;
  transition: all 1s ease;

  &:focus {
    outline: none;
    border-color: rgba(120, 218, 172, 1);
  }
`;

const StyledButton = styled.button`
  display: none;
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
      <h4>Ingredients</h4>
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
          <option>oz</option>
          <option>lb</option>
          <option>tsp</option>
          <option>tbsp</option>
          <option>small</option>
          <option>medium</option>
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
