import React from "react";
import styled from "styled-components";
import InputIngredient from "./InputIngredient";
import TrashIcon from "../../icons/TrashIcon";

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

const ListItemGrid = styled.div`
  display: grid;
  grid-template-columns: auto 90px;
`;

const StyledDeleteButton = styled.button`
  outline: none;
  border: none;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
`;

export default function AddIngredient({
  ingredients,
  onSubmit,
  onChangeAmount,
  onChangeUnit,
  onChangeIngredient,
  onDeleteClick,
  options,
  amount,
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
        amount={amount}
        ingredientRef={ingredientRef}
        ingredientAmountRef={ingredientAmountRef}
      />
      <Flex>
        <StyledList>
          {ingredients.map(ingredient => {
            return (
              <ListItemGrid key={ingredient.name}>
                <StyledListItems>
                  {ingredient.amount} {ingredient.unit} {ingredient.name}
                </StyledListItems>
                <StyledDeleteButton onClick={() => onDeleteClick(ingredient)}>
                  <TrashIcon />
                </StyledDeleteButton>
              </ListItemGrid>
            );
          })}
        </StyledList>
      </Flex>
    </StyledAddIngredient>
  );
}
