import React from "react";
import styled from "styled-components";

const StyledHeadline = styled.h3`
  margin-left: 5%;
  margin-right: 5%;
`;

const Container = styled.section`
  margin-left: 5%;
  margin-right: 5%;
`;

const StyledStepList = styled.ol``;

const StyledListItemGrid = styled.div`
  display: grid;
  grid-template-columns: 30px auto;
`;

const StyledNumber = styled.span`
  color: #3d9970;
  font-weight: bold;
  font-size: 20px;
`;

const StyledListItem = styled.li`
  margin-bottom: 10px;
  list-style: none;
`;

export default function Steps({ recipe }) {
  const steps = recipe.steps;

  let stepNumber = 1;

  return (
    <div>
      <StyledHeadline>Steps</StyledHeadline>
      <Container>
        <StyledStepList>
          {steps.map(step => {
            return (
              <StyledListItemGrid key={step}>
                <StyledNumber>{stepNumber++}</StyledNumber>
                <StyledListItem>{step}</StyledListItem>
              </StyledListItemGrid>
            );
          })}
        </StyledStepList>
      </Container>
    </div>
  );
}
