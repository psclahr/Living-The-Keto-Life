import React from "react";
import styled from "styled-components";

const StyledRecipePreview = styled.figure`
  display: flex;
  justify-content: center;
`;

const StyledImg = styled.img`
  position: relative;
  left: 35px;
  height: 150px;
  width: 150px;
`;

const StyledRecipePreviewCaption = styled.figcaption`
  position: relative;
  right: 110px;
  top: 5px;
  height: 20px;
  color: white;
  background: #3d9970;
`;

export default function RecipePreview() {
  return (
    <StyledRecipePreview>
      <StyledImg
        src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
        alt=""
      />
      <StyledRecipePreviewCaption>Rezepttitel</StyledRecipePreviewCaption>
    </StyledRecipePreview>
  );
}
