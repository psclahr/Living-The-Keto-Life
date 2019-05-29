import React from "react";
import styled from "styled-components";
import AddImage from "./CreateElements/AddImage";
import AddIngredient from "./CreateElements/AddIngredient";

const CreatePageGrid = styled.form`
  display: grid;
  grid-template-rows: 40px 170px auto auto;
  margin-top: 10px;
`;

const Flex = styled.section`
  display: flex;
  justify-content: center;
`;
const StyledInputTitle = styled.input`
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 2px solid lightblue;
  height: 20px;
  width: 90%;
  transition: all 1s ease;

  &:focus {
    outline: none;
    border-color: hotpink;
  }
`;

const AddDescription = styled.section``;

export default function CreatePage({ onButtonClick }) {
  function handleButtonClick(event) {
    event.preventDefault();
    console.log(event.target.title.value);
    onButtonClick({
      title: event.target.title.value
    });
  }

  return (
    <CreatePageGrid onSubmit={handleButtonClick}>
      <Flex>
        <StyledInputTitle
          placeholder="Give us a recipe title..."
          name="title"
          required
        />
      </Flex>
      <AddImage />
      <AddDescription />
      <button>+</button>
    </CreatePageGrid>
  );
}
