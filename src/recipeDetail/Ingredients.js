import React from "react";
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
  height: 50px;
`;

const StyledListName = styled.div`
  font-size: 13px;
  height: 24px;
  display: flex;
  align-items: center;
`;

const StyledNutritions = styled.div`
  font-size: 11px;
  height: 24px;
  height: 24px;
  display: flex;
  align-items: center;

  & b {
    font-size: 11px;
    margin-right: 2px;
  }
`;

const StyledLine = styled.div`
  width: 95%;
  height: 1px;
  background: black;
`;

export default function Ingredients({ recipe }) {
  const ingredients = recipe.ingredients;

  return (
    <>
      <StyledHeadline>Ingredients</StyledHeadline>
      <Container>
        <StyledIngredientsList>
          {ingredients.map(ingredient => {
            return (
              <StyledListBox key={ingredient._id}>
                <StyledListName>
                  {ingredient.amount}
                  {ingredient.unit} {ingredient.name}
                </StyledListName>
                <StyledNutritions>
                  <b>Calories: {Math.round(ingredient.calories)}kcal</b>| Fats:{" "}
                  {Math.round(ingredient.fats)}g | Carbs:{" "}
                  {Math.round(ingredient.carbs)}g | Proteins:{" "}
                  {Math.round(ingredient.proteins)}g
                </StyledNutritions>
                <StyledLine />
              </StyledListBox>
            );
          })}
        </StyledIngredientsList>
      </Container>
    </>
  );
}
