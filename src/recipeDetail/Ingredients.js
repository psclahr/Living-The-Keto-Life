import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.section`
  margin-left: 5%;
  margin-right: 5%;
`;

const StyledHeadline = styled.h3`
  margin-left: 5%;
  margin-right: 5%;
`;

const StyledIngredientsList = styled.ul`
  margin: 0;
  padding: 0;
`;

const StyledListBox = styled.li`
  list-style: none;
  margin-bottom: 5px;
`;

const StyledListName = styled.div`
  display: flex;
  align-items: center;
`;

const StyledNutritions = styled.div`
  display: flex;
  align-items: center;

  & b {
    margin-right: 2px;
  }
`;

const StyledLine = styled.div`
  width: 95%;
  height: 1px;
  background: black;
`;

export default function Ingredients({ recipe }) {
  const [ingredients, setIngredients] = useState(recipe.ingredients);

  useEffect(() => {
    ingredients.map(ingredient => (ingredient.isHidden = false));
    console.log(ingredients);
  });

  const toggle = ingredient => {
    const index = ingredients.indexOf(ingredient);

    setIngredients([
      ...ingredients.slice(0, index),
      { ...ingredient, isHidden: !ingredient.isHidden },
      ...ingredients.slice(index + 1)
    ]);
  };

  return (
    <>
      <StyledHeadline>Ingredients</StyledHeadline>
      <Container>
        <StyledIngredientsList>
          {ingredients.map(ingredient => {
            return (
              <StyledListBox key={ingredient._id}>
                <StyledListName onClick={() => toggle(ingredient)}>
                  {ingredient.amount}
                  {ingredient.unit} {ingredient.name}
                </StyledListName>
                {ingredient.isHidden ? (
                  <StyledNutritions>
                    <b>Calories: {Math.round(ingredient.calories)}kcal</b>|
                    Fats: {Math.round(ingredient.fats)}g | Carbs:{" "}
                    {Math.round(ingredient.carbs)}g | Proteins:{" "}
                    {Math.round(ingredient.proteins)}g
                  </StyledNutritions>
                ) : null}
              </StyledListBox>
            );
          })}
        </StyledIngredientsList>
      </Container>
    </>
  );
}
