import React from "react";
import styled from "styled-components";

const StyledForm = styled.form``;
const StyledAmountInput = styled.input``;
const StyledSelect = styled.select``;

export default function InputIngredient() {
  function getNutrition(amount, unit, ingredient) {
    const caloriesQuery = async () => {
      let calories = 0;
      await fetch(
        `https://api.edamam.com/api/nutrition-data?app_id=702bbe7d&app_key=7470d6e6a4439eb58cae84ec6ebc10a7&ingr=1%${amount}${unit}%${amount}${ingredient}`
      )
        .then(res => res.json())
        .then(res => (calories = res.totalNutrients.ENERC_KCAL.quantity));
      console.log(calories);
    };
    caloriesQuery();

    /*fetch(
            `https://api.edamam.com/api/nutrition-data?app_id=702bbe7d&app_key=7470d6e6a4439eb58cae84ec6ebc10a7&ingr=1%${amount}${unit}%${amount}${ingredient}`
            )
            .then(res => res.json())
            .then(res => console.log(res.totalNutrients.ENERC_KCAL.quantity))
            .then(res => (calories = res.totalNutrients.ENERC_KCAL.quantity))
            .catch(err => console.log(err));
            console.log()*/
  }

  function handleSubmitButton(event) {
    event.preventDefault();
    const amount = event.target.amount.value;
    const unit = event.target.unit.value;
    const ingredient = event.target.ingredient.value;
    getNutrition(amount, unit, ingredient);
  }

  return (
    <StyledForm onSubmit={handleSubmitButton}>
      <StyledAmountInput placeholder="amount" name="amount" />
      <StyledSelect name="unit">
        <option>gr</option>
        <option>small</option>
        <option>large</option>
      </StyledSelect>
      <input type="search" placeholder="ingredient" name="ingredient" />
      <button>+</button>
    </StyledForm>
  );
}
