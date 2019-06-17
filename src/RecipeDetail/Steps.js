import React from "react";
import styled from "styled-components";

const Container = styled.section`
  padding-left: 5%;
  padding-right: 5%;
  border-bottom: 2px solid rgb(120 218 172);
  border-radius: 15px;
`;

const StyledListItemGrid = styled.div`
  display: grid;
  grid-template-columns: 30px auto;
`;

const StyledNumber = styled.span`
  color: rgb(120 218 172);
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
    <Container>
      <h4>Steps</h4>
      <ol>
        {steps.map(step => {
          return (
            <StyledListItemGrid key={step}>
              <StyledNumber>{stepNumber++}</StyledNumber>
              <StyledListItem>{step}</StyledListItem>
            </StyledListItemGrid>
          );
        })}
      </ol>
    </Container>
  );
}
