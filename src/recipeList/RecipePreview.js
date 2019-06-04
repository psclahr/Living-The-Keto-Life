import React from "react";
import styled from "styled-components";

const StyledFlexbox = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 5px;
`;

const StyledTitle = styled.h4`
  margin: 0px;

  span {
    background-color: #3d9970;
    color: white;
  }
`;

export default function RecipePreview({ title, image, onClick }) {
  const StyledRecipePreview = styled.div`
    background-image: url(${image});
    background-size: 275px;
    width: 150px;
    height: 150px;
    background-position: center center;
    background-repeat: no-repeat;
  `;
  return (
    <StyledFlexbox title={title} image={image} onClick={onClick}>
      <StyledRecipePreview>
        <StyledTitle>
          <span>{title}</span>
        </StyledTitle>
      </StyledRecipePreview>
    </StyledFlexbox>
  );
}
