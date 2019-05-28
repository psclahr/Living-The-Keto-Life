import React from "react";
import styled from "styled-components";
import InputIngredient from "./InputIngredient";

const CreatePageGrid = styled.div`
  display: grid;
  grid-template-rows: 100px auto auto;
`;

export default function CreatePage() {
  return (
    <CreatePageGrid>
      <Title />
      <Ingredient>
        <InputIngredient />
      </Ingredient>
      <Description />
    </CreatePageGrid>
  );
}
