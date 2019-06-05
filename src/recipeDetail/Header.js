import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  background-image: url(${props => props.url});
  background-size: 100%;
  height: 231px;
  background-position: center center;
  background-repeat: no-repeat;
  margin-right: 0;
  margin-left: 0;
  margin-top: 30px;
`;

const StyledTitleContainer = styled.div`
  background-color: #3d9970;
  color: white;
  height: 42px;
  position: relative;
  top: -10px;
  margin: 0;
  padding-left: 15px;
  display: flex;
  align-items: center;
`;

const StyledTitle = styled.h3`
  color: white;
`;

export default function Header({ recipe }) {
  return (
    <StyledHeader url={recipe.image}>
      <StyledTitleContainer>
        <StyledTitle>{recipe.title}</StyledTitle>
      </StyledTitleContainer>
    </StyledHeader>
  );
}
