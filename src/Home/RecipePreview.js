import React from "react";
import styled from "styled-components";

const StyledFlexbox = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 5px;
`;

const StyledHead = styled.div`
  background: linear-gradient(90deg, rgb(214, 232, 117), rgb(120, 218, 172));
  display: grid;
  grid-template-columns: auto 40px;
`;

const StyledTitle = styled.h3`
  background: none;
  width: 272px;
`;

export default function RecipePreview({ title, image, onClick }) {
  const StyledRecipePreview = styled.div`
    background-image: url(${image});
    background-size: 100%;
    width: 80%;
    height: 187px;
    background-position: center center;
    background-repeat: no-repeat;
    border-radius: 10px;
    margin-top: 20px;
  `;

  return (
    <StyledFlexbox title={title} image={image} onClick={onClick}>
      <StyledRecipePreview>
        <StyledHead>
          <StyledTitle>{title}</StyledTitle>
        </StyledHead>
      </StyledRecipePreview>
    </StyledFlexbox>
  );
}
