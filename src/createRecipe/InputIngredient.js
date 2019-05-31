import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  grid-template-areas:
    "h h h"
    "a u i"
    "b b b ";
  margin-left: 5%;
`;
const StyledHeadline = styled.h3`
  grid-area: h;
  margin-bottom: 10px;
`;
const StyledAmountInput = styled.input`
  border: 1px solid lightblue;
  border-radius: 10%;
  grid-area: a;
  width: 60px;
`;
const StyledUnitSelect = styled.select`
  background: white;
  border: 1px solid lightblue;
  border-radius: 10%;
  grid-area: u;
  width: 40px;
`;
const StyledIngredientInput = styled.input`
  background: white;
  border: 1px solid lightblue;
  border-radius: 10%;
  grid-area: i;
  width: 200px;
`;

const StyledButton = styled.button`
  grid-area: b;
  border: 1px solid blue;
  display: none;
`;

const inputAmountRef = React.createRef();
const formRef = React.createRef();

export default function InputIngredient({
  onSubmit,
  onChangeAmount,
  onChangeUnit,
  onChangeIngredient
}) {
  const [inputIngredientValue, setInputIngredientValue] = useState("");
  const [options, setOptions] = useState([]);

  function handleInputChange(event) {
    setInputIngredientValue(event.target.value);
    searchForIngredients();
  }

  function searchForIngredients() {
    fetch(
      `https://api.edamam.com/auto-complete?q=${inputIngredientValue}&limit=10&app_id=$702bbe7d&app_key=7470d6e6a4439eb58cae84ec6ebc10a7`
    )
      .then(res => res.json())
      .then(data => setOptions(data))
      .catch(err => console.log(err));
  }

  return (
    <StyledForm onSubmit={onSubmit} ref={formRef}>
      <StyledHeadline>Ingredients</StyledHeadline>
      <StyledAmountInput
        name="amount"
        ref={inputAmountRef}
        type="number"
        placeholder="Amount"
        autoComplete="off"
        onChange={onChangeAmount}
        required
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
  );
}
