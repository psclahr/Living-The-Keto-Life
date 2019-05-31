import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  grid-template-rows: auto 20px;
  gap: 10px;
`;
const StyledInput = styled.input`
  border: 2px solid lightblue;
  width: 100%;
  height: 100%;
`;

export default function AddDescription({
  onSubmit,
  onChange,
  stepList,
  descriptionRef,
  descriptionInputRef
}) {
  return (
    <StyledForm ref={descriptionRef} onSubmit={onSubmit}>
      <label>
        <StyledInput
          ref={descriptionInputRef}
          onChange={onChange}
          placeholder="step by step to your favourite dish..."
        />
      </label>
      <button>Add Step</button>
      <ol>
        {stepList.map(step => {
          return <li key={step}>{step}</li>;
        })}
      </ol>
    </StyledForm>
  );
}
