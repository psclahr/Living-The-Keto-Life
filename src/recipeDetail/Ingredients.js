import React, { useState } from "react";
import styled from "styled-components";
import InfoButton from "./InfoButton";

const Container = styled.section`
  margin-left: 5%;
  margin-right: 5%;
`;

const StyledHeadline = styled.h4`
  margin-left: 5%;
  margin-right: 5%;
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

const StyledNutritionList = styled.ul`
  margin: 0;
  padding: 0;
`;

const StyledLine = styled.div`
  height: 1px;
  width: 70%;
  background-color: black;
  margin-top: 4px;
  margin-bottom: 4px;
`;

const StyledListItem = styled.li`
  font-size: 16px;
  list-style: none;
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
    <>
      <StyledHeadline>Ingredients</StyledHeadline>
      <Container>
        <StyledIngredientsList>
          {recipe.ingredients.map(ingredient => {
            return (
              <StyledIngredientListItem key={ingredient._id}>
                <InfoButton onClick={() => toggle(ingredient)} />
                <div>
                  <span>{ingredient.amount}</span>
                  <span>{ingredient.unit}</span>&nbsp;
                  <span>{ingredient.name}</span>
                  {ingredient === activeIngredient ? (
                    <StyledNutritionList>
                      <StyledLine />
                      <StyledListItem>
                        <b>Calories: {Math.round(ingredient.calories)}kcal</b>
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
    </>
  );
}
