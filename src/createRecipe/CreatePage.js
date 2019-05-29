import React from "react";
import styled from "styled-components";
import AddTitle from "./CreateElements/AddTitle";
import AddImage from "./CreateElements/AddImage";
import AddIngredient from "./CreateElements/AddIngredient";

const CreatePageGrid = styled.div`
  display: grid;
  grid-template-rows: 40px 170px auto auto;
  margin-top: 10px;
`;

const AddDescription = styled.section``;

export default function CreatePage({ onButtonClick }) {
  function handleButtonClick(event) {
    onButtonClick({
      title: event.target.value
    });
  }

  return (
    <CreatePageGrid>
      <AddTitle value />
      <AddImage />
      <AddIngredient />
      <AddDescription />
      <button onClick={handleButtonClick}>+</button>
    </CreatePageGrid>
  );
}
