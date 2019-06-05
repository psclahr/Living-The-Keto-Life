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
  position: relative;
`;

const StyledNutritions = styled.div`
  border: 1px solid black;
  background: white;
  position: absolute;
`;

export default function Ingredients({ recipe }) {
  const [ingredientsFromRecipe, setIngredientsFromRecipe] = useState(
    recipe.ingredients
  );

  useEffect(() => {
    ingredientsFromRecipe.map(ingredient => (ingredient.isHidden = false));
  });

  const toggle = ingredient => {
    const index = ingredientsFromRecipe.indexOf(ingredient);

    setIngredientsFromRecipe([
      ...ingredientsFromRecipe.slice(0, index),
      { ...ingredient, isHidden: !ingredient.isHidden },
      ...ingredientsFromRecipe.slice(index + 1)
    ]);
  };

  return (
    <>
      <StyledHeadline>Ingredients</StyledHeadline>
      <Container>
        <StyledIngredientsList>
          {ingredientsFromRecipe.map(ingredient => {
            return (
              <StyledListBox key={ingredient._id}>
                <StyledListName onClick={() => toggle(ingredient)}>
                  {ingredient.amount}
                  {ingredient.unit} {ingredient.name}
                  {ingredient.isHidden ? (
                    <StyledNutritions>
                      <b>Calories: {Math.round(ingredient.calories)}kcal</b>|
                      Fats: {Math.round(ingredient.fats)}g | Carbs:{" "}
                      {Math.round(ingredient.carbs)}g | Proteins:{" "}
                      {Math.round(ingredient.proteins)}g
                    </StyledNutritions>
                  ) : null}
                </StyledListName>
              </StyledListBox>
            );
          })}
        </StyledIngredientsList>
      </Container>
    </>
  );
}
