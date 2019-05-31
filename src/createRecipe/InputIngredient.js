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

export default function InputIngredient() {
  const [inputIngredientValue, setInputIngredientValue] = useState("");
  const [options, setOptions] = useState([]);
  const [nutritions, setNutritions] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState({});

  function getNutrition(amount, unit, ingr) {
    try {
      const nutritionQuery = async () => {
        await fetch(
          `https://api.edamam.com/api/nutrition-data?app_id=702bbe7d&app_key=7470d6e6a4439eb58cae84ec6ebc10a7&ingr=${amount}%20${unit}%20${ingr}`
        )
          .then(res => res.json())
          .then(data =>
            setNutritions({
              calories: data.totalNutrients.ENERC_KCAL
                ? data.totalNutrients.ENERC_KCAL.quantity
                : 0,
              proteins: data.totalNutrients.PROCNT
                ? data.totalNutrients.PROCNT.quantity
                : 0,
              carbs: data.totalNutrients.CHOCDF
                ? data.totalNutrients.CHOCDF.quantity
                : 0,
              fats: data.totalNutrients.FAT
                ? data.totalNutrients.FAT.quantity
                : 0,
              saturatedFats: data.totalNutrients.FASAT
                ? data.totalNutrients.FASAT.quantity
                : 0,
              monounsaturatedFats: data.totalNutrients.FAMS
                ? data.totalNutrients.FAMS.quantity
                : 0,
              polyunsaturatedFats: data.totalNutrients.FAPU
                ? data.totalNutrients.FAPU.quantity
                : 0
            })
          );
      };
      nutritionQuery();
      setIngredient({
        name: ingr,
        amount,
        unit,
        calories: nutritions.calories,
        carbs: nutritions.carbs,
        proteins: nutritions.proteins,
        fats: nutritions.fats,
        fatsDivided: {
          saturatedFats: nutritions.saturatedFats,
          monounsaturatedFats: nutritions.monounsaturatedFats,
          polyunsaturatedFats: nutritions.polyunsaturatedFats
        }
      });
      setIngredients([...ingredients, ingredient]);
      console.log(ingredient);
    } catch (err) {
      console.log(err);
    }
  }

  function handleSubmitButton(event) {
    event.preventDefault();
    const amount = event.target.amount.value;
    const unit = event.target.unit.value;
    const ingr = event.target.ingr.value;
    getNutrition(amount, unit, ingr);

    formRef.current.reset();
    inputAmountRef.current.focus();
  }

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
    <StyledForm
      onSubmit={handleSubmitButton}
      ref={formRef}
      ingredients={ingredients}
    >
      <StyledHeadline>Ingredients</StyledHeadline>
      <StyledAmountInput
        name="amount"
        ref={inputAmountRef}
        type="number"
        placeholder="Amount"
        autoComplete="off"
        required
      />
      <StyledUnitSelect name="unit">
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
        onChange={handleInputChange}
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
