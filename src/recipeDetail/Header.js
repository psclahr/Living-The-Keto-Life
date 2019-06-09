import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  background-image: url(${props => props.url});
  background-size: 100%;
  height: 231px;
  background-position: center;
  background-repeat: no-repeat;
  margin: 30px 0 0 0;
`;

const StyledTitle = styled.h3`
  position: relative;
  top: -10px;
  padding: 10px;
  display: flex;
  align-items: center;
`;

export default function Header({ recipe }) {
  return (
    <StyledHeader url={recipe.image}>
      <StyledTitle>{recipe.title}</StyledTitle>
    </StyledHeader>
  );
}
