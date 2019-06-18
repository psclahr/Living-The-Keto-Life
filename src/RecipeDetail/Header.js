import React from "react";
import styled from "styled-components";

const StyledImage = styled.div`
  background-image: url(${props => props.url});
  margin: 30px 0 0 0;
  height: 231px;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 15px;
`;

const StyledTitle = styled.h3`
  padding: 10px;
  position: sticky;
  top: -10px;
  display: flex;
  align-items: center;
`;

export default function Header({ recipe }) {
  return (
    <StyledImage url={recipe.image}>
      <StyledTitle>{recipe.title}</StyledTitle>
    </StyledImage>
  );
}
