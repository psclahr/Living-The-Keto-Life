import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AddImage from "./CreateElements/AddImage";
import AddDescription from "./CreateElements/AddDescription";
import AddIngredient from "./CreateElements/AddIngredient";
import AddTitle from "./CreateElements/AddTitle";

const CreatePageGrid = styled.div`
  display: grid;
  grid-template-rows: 40px 170px auto auto;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
`;

export default function CreatePage({ onButtonClick }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionList, setDescriptionList] = useState([]);

  function handleButtonClick(event) {
    console.log(title);
    event.preventDefault();
    onButtonClick({
      title,
      description: descriptionList
    });
  }
  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleSubmitStep(event) {
    event.preventDefault();
    setDescriptionList([...descriptionList, description]);
  }

  return (
    <CreatePageGrid>
      <AddTitle onChange={handleTitleChange} />
      <AddImage />
      <AddDescription
        onSubmit={handleSubmitStep}
        onChange={handleDescriptionChange}
      />
      <button onClick={handleButtonClick}>+</button>
    </CreatePageGrid>
  );
}
