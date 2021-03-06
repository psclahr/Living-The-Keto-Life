import React, { useState } from "react";
import styled from "styled-components";
import InfoIcon from "../icons/InfoIcon";

const Container = styled.section`
  padding-left: 5%;
  padding-right: 5%;
  border-radius: 15px;
  border-bottom: 2px solid rgb(120 218 172);
`;

const StyledIngredientsList = styled.ul`
  font-size: 16px;
  margin-top: 0;
  margin-left: 30px;
  padding: 0;
`;

const StyledIngredientListItem = styled.li`
  list-style: none;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: 40px auto;
`;

const StyledInfoButton = styled.button`
  outline: none;
  background: none;
  border: none;
  height: 30px;
`;

const StyledNutritionList = styled.ul`
  margin: 0;
  padding: 0;
`;

const StyledLine = styled.div`
  background: linear-gradient(90deg, rgb(214, 232, 117), rgb(120, 218, 172));
  width: 70%;
  height: 1px;
  margin-top: 4px;
  margin-bottom: 4px;
`;

const StyledListItem = styled.li`
  list-style: none;
  font-size: 16px;
  margin-top: 3px;

  & b {
    font-size: 16px;
  }
`;

export default function Ingredients({ recipe }) {
  const [activeIngredient, setActiveIngredient] = useState(null);

  function toggle(ingredient) {
    setActiveIngredient(activeIngredient === ingredient ? null : ingredient);
  }

  return (
    <Container>
      <h4>Ingredients</h4>
      <StyledIngredientsList>
        {recipe.ingredients.map(ingredient => {
          return (
            <StyledIngredientListItem key={ingredient._id}>
              <StyledInfoButton onClick={() => toggle(ingredient)}>
                <InfoIcon />
              </StyledInfoButton>
              <div>
                <span>{ingredient.amount}</span>&nbsp;
                <span>{ingredient.unit}</span>&nbsp;
                <span>{ingredient.name}</span>
                {ingredient === activeIngredient ? (
                  <StyledNutritionList>
                    <StyledLine />
                    <StyledListItem>
                      <b>Calories: {Math.round(ingredient.calories)}cal</b>
                    </StyledListItem>
                    <StyledListItem>
                      Fats: {Math.round(ingredient.fats)}g
                    </StyledListItem>
                    <StyledListItem>
                      Carbs: {Math.round(ingredient.carbs)}g
                    </StyledListItem>
                    <StyledListItem>
                      Proteins: {Math.round(ingredient.proteins)}g
                    </StyledListItem>
                  </StyledNutritionList>
                ) : null}
              </div>
            </StyledIngredientListItem>
          );
        })}
      </StyledIngredientsList>
    </Container>
  );
}
