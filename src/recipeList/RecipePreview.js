import React from "react";
import styled from "styled-components";

const StyledFlexbox = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 5px;
`;

const StyledTitle = styled.h3`
  width: 312px;
`;

export default function RecipePreview({ title, image, onClick }) {
  const StyledRecipePreview = styled.div`
    background-image: url(${image});
    background-size: 320px;
    width: 312px;
    height: 187px;
    background-position: center center;
    background-repeat: no-repeat;
    border-radius: 10px;
    margin-top: 20px;
  `;

  return (
    <StyledFlexbox title={title} image={image} onClick={onClick}>
      <StyledRecipePreview>
        <StyledTitle>{title}</StyledTitle>
      </StyledRecipePreview>
    </StyledFlexbox>
  );
}
