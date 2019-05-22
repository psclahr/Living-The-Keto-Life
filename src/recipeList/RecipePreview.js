import React from "react";
import styled from "styled-components";

const StyledFlexbox = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 5px;
`;

const StyledRecipePreview = styled.div`
  background-image: url("https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80");
  background-size: 175px;
  width: 175px;
  height: 175px;
  background-position: center center;
  background-repeat: no-repeat;
`;

const StyledTitle = styled.h4`
  margin: 0px;

  span {
    background-color: #3d9970;
    color: white;
  }
`;

export default function RecipePreview() {
  return (
    <StyledFlexbox>
      <StyledRecipePreview>
        <StyledTitle>
          <span>Rezepttitel</span>
        </StyledTitle>
      </StyledRecipePreview>
    </StyledFlexbox>
  );
}
