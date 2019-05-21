import React from "react";
import styled from "styled-components";

const StyledRecipePreview = styled.figure`
  position: relative;
  margin: 12px;
`;

const StyledRecipePreviewCaption = styled.figcaption`
  position: absolute;
  top: 4px;
  left: 4px;
  color: #3d9970;
`;

export default function RecipePreview() {
  return (
    <StyledRecipePreview>
      <img src="https://via.placeholder.com/150.jpeg" alt="" />
      <StyledRecipePreviewCaption>Rezepttitel</StyledRecipePreviewCaption>
    </StyledRecipePreview>
  );
}
