import React from "react";
import styled from "styled-components";
import AddTitle from "./AddTitle";
import AddImage from "./AddImage";
import AddIngredient from "./AddIngredient";

const CreatePageGrid = styled.div`
  display: grid;
  grid-template-rows: 40px 170px auto auto;
  margin-top: 10px;
`;

const AddDescription = styled.section``;

export default function CreatePage() {
  return (
    <CreatePageGrid>
      <AddTitle />
      <AddImage />
      <AddIngredient />
      <AddDescription />
    </CreatePageGrid>
  );
}
