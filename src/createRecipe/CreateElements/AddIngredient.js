import React from "react";
import styled from "styled-components";
import InputIngredient from "./InputIngredient";

const StyledAddIngredient = styled.section`
  height: auto;
  margin-top: 1em;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledList = styled.ul`
  min-height: 100px;
  width: 90%;
  list-style: none;
`;

const StyledListItems = styled.li`
  margin-top: 10px;

  &::before {
    content: "•";
    color: rgb(120 218 172);
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

export default function AddIngredient({
  ingredients,
  onSubmit,
  onChangeAmount,
  onChangeUnit,
  onChangeIngredient,
  onDeleteClick,
  options,
  ingredientRef,
  ingredientAmountRef
}) {
  return (
    <StyledAddIngredient>
      <InputIngredient
        onSubmit={onSubmit}
        onChangeAmount={onChangeAmount}
        onChangeUnit={onChangeUnit}
        onChangeIngredient={onChangeIngredient}
        options={options}
        ingredientRef={ingredientRef}
        ingredientAmountRef={ingredientAmountRef}
      />
      <Flex>
        <StyledList>
          {ingredients.map(ingredient => {
            return (
              <StyledListItems key={ingredient.name}>
                {ingredient.amount} {ingredient.unit} {ingredient.name}
                <button onClick={() => onDeleteClick(ingredient)}>
                  Delete!
                </button>
              </StyledListItems>
            );
          })}
        </StyledList>
      </Flex>
    </StyledAddIngredient>
  );
}
