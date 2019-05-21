import React from "react";
import styled from "styled-components";

const Flexbox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const StyledRecipePreview = styled.div`
  background-image: url("https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80");
  background-size: 150px;
  width: 150px;
  height: 150px;
  background-position: center center;
  background-repeat: no-repeat;
`;

const Title = styled.span`
  color: white;
  background: #3d9970;
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
    <Flexbox>
      <StyledRecipePreview>
        <Title>Rezepttitel</Title>
      </StyledRecipePreview>
    </Flexbox>
  );
}
