import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  background-image: url(${props => props.url});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 231px;
  margin: 30px 0 0 0;
  border-radius: 15px;
`;

const StyledTitle = styled.h3`
  position: sticky;
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
