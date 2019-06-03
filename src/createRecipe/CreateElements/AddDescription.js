import React from "react";
import styled from "styled-components";

const DescriptionGrid = styled.div`
  display: grid;
  grid-template-rows: 30px 100px auto;
`;

const StyledHeadline = styled.h3`
  display: flex;
  justify-content: center;
  margin: 0;
  font-size: 20px;
`;

const StyledForm = styled.form``;
const StyledTextarea = styled.textarea`
  border: 2px solid lightblue;
  width: 100%;
  height: 100%;
`;

const StyledButton = styled.button`
  width: 100px;
  height: 20px;
  background: lightblue;
  border-radius: 25px;
  border-color: white;
`;

const StyledList = styled.ol`
  min-height: 75px;
`;

export default function AddDescription({
  onSubmit,
  onChange,
  stepList,
  descriptionRef,
  descriptionInputRef
}) {
  return (
    <DescriptionGrid>
      <StyledHeadline>Steps</StyledHeadline>
      <StyledTextarea
        ref={descriptionInputRef}
        onChange={onChange}
        placeholder="step by step to your favourite dish..."
        form="stepform"
      />
      <StyledForm ref={descriptionRef} onSubmit={onSubmit} id="stepform">
        <StyledButton>Add Step</StyledButton>
        <StyledList>
          {stepList.map(step => {
            return <li key={step}>{step}</li>;
          })}
        </StyledList>
      </StyledForm>
    </DescriptionGrid>
  );
}
