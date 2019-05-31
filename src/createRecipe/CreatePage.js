import React, { useState } from "react";
import styled from "styled-components";
import AddImage from "./CreateElements/AddImage";
import AddDescription from "./CreateElements/AddDescription";
import AddIngredient from "./CreateElements/AddIngredient";
import AddTitle from "./CreateElements/AddTitle";

const CreatePageGrid = styled.div`
  display: grid;
  grid-template-rows: 40px 170px auto auto 30px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  overflow-y: scroll;
`;

export default function CreatePage({ onButtonClick }) {
  const [title, setTitle] = useState("");
  const [step, setStep] = useState("");
  const [stepList, setStepList] = useState([]);

  function handleButtonClick(event) {
    event.preventDefault();
    onButtonClick({
      title,
      steps: stepList
    });
  }
  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleDescriptionChange(event) {
    setStep(event.target.value);
  }

  function handleSubmitIngredient(event) {
    event.preventDefault();
  }

  function handleSubmitStep(event) {
    event.preventDefault();
    setStepList([...stepList, step]);
  }

  return (
    <CreatePageGrid>
      <AddTitle onChange={handleTitleChange} />
      <AddImage />
      <AddIngredient onSubmit={handleSubmitIngredient} />
      <AddDescription
        onSubmit={handleSubmitStep}
        onChange={handleDescriptionChange}
        stepList={stepList}
      />
      <button onClick={handleButtonClick}>+</button>
    </CreatePageGrid>
  );
}
