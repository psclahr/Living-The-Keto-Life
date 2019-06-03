import React, { useEffect } from "react";
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

export default function RecipePreview({ title, image }) {
  const StyledRecipePreview = styled.div`
    background-image: url(${image});
    background-size: 175px;
    width: 175px;
    height: 175px;
    background-position: center center;
    background-repeat: no-repeat;
  `;

  useEffect(() => {
    console.log(title, image);
  });

  return (
    <StyledFlexbox titel={title} image={image}>
      <StyledRecipePreview>
        <StyledTitle>
          <span>{title}</span>
        </StyledTitle>
      </StyledRecipePreview>
    </StyledFlexbox>
  );
}
