import React from "react";
import RecipePreview from "./RecipePreview";
import styled from "styled-components";

const RecipePreviewGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  overflow-y: scroll;
`;

export default function RecipePreviewPage() {
  return (
    <RecipePreviewGrid>
      <RecipePreview />
      <RecipePreview />
      <RecipePreview />
      <RecipePreview />
      <RecipePreview />
      <RecipePreview />
      <RecipePreview />
      <RecipePreview />
      <RecipePreview />
      <RecipePreview />
    </RecipePreviewGrid>
  );
}
