import React, { useState } from "react";
import styled from "styled-components";
import Select from "react-select";

const StyledForm = styled.form``;
const StyledAmountInput = styled.input`
  border: 1px solid black;
`;
const StyledSelect = styled.select`
  border: 1px solid black;
`;
const StyledSelectIngredient = styled(Select)`
  border: 1px solid black;
`;
const StyledButton = styled.button`
  border: 1px solid black;
`;
const inputAmountRef = React.createRef();

export default function InputIngredient() {
  const [inputValue, setInputValue] = useState("");
  const [ingredientSuggestion, setIngredientSuggestion] = useState([]);
  const [options, setOptions] = useState([]);

  function getNutrition(amount, unit, ingredient) {
    try {
      const nutritionQuery = async () => {
        let nutritionForIngredient = {};

        await fetch(
          `https://api.edamam.com/api/nutrition-data?app_id=702bbe7d&app_key=7470d6e6a4439eb58cae84ec6ebc10a7&ingr=${amount}%20${unit}%20${ingredient}`
        )
          .then(res => res.json())
          .then(
            data =>
              (nutritionForIngredient = {
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

        console.log(nutritionForIngredient);
      };
      nutritionQuery();
    } catch (err) {
      console.log(err);
    }
  }

  //data.map(string => string && {label: string, value: string})

  function handleSubmitButton(event) {
    event.preventDefault();
    const amount = event.target.amount.value;
    const unit = event.target.unit.value;
    const ingredient = event.target.ingredient.value;

    getNutrition(amount, unit, ingredient);

    event.target.amount.value = "";
    event.target.unit.value = "gr";
    inputAmountRef.current.focus();
  }

  function handleInputChange(newValue) {
    const newInputValue = newValue;
    setInputValue(newInputValue);
    searchForIngredients();
    setOptions([
      { value: ingredientSuggestion[0], label: ingredientSuggestion[0] },
      { value: ingredientSuggestion[1], label: ingredientSuggestion[1] },
      { value: ingredientSuggestion[2], label: ingredientSuggestion[2] },
      { value: ingredientSuggestion[3], label: ingredientSuggestion[3] },
      { value: ingredientSuggestion[4], label: ingredientSuggestion[4] },
      { value: ingredientSuggestion[5], label: ingredientSuggestion[5] },
      { value: ingredientSuggestion[6], label: ingredientSuggestion[6] },
      { value: ingredientSuggestion[7], label: ingredientSuggestion[7] },
      { value: ingredientSuggestion[8], label: ingredientSuggestion[8] },
      { value: ingredientSuggestion[9], label: ingredientSuggestion[9] }
    ]);
  }

  function searchForIngredients() {
    try {
      const ingredientQuery = async () => {
        await fetch(
          `https://api.edamam.com/auto-complete?q=${inputValue}&limit=10&app_id=$702bbe7d&app_key=7470d6e6a4439eb58cae84ec6ebc10a7`
        )
          .then(res => res.json())
          .then(data => setIngredientSuggestion(data));
      };
      ingredientQuery();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <StyledForm onSubmit={handleSubmitButton}>
      <label>
        Amount:
        <StyledAmountInput name="amount" ref={inputAmountRef} type="number" />
      </label>
      <label>
        Unit:
        <StyledSelect name="unit">
          <option>gr</option>
          <option>kg</option>
          <option>l</option>
          <option>ml</option>
          <option>small</option>
          <option>large</option>
        </StyledSelect>
      </label>
      <label>
        Ingredient:
        <StyledSelectIngredient
          options={options}
          onInputChange={handleInputChange}
        />
      </label>
      <StyledButton type="submit">+</StyledButton>
    </StyledForm>
  );
}
