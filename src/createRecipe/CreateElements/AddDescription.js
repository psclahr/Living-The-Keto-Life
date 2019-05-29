import React from "react";
import styled from "styled-components";

const StyledForm = styled.form``;
const StyledInput = styled.input`
  border: 1px solid lightblue;
  border-radius: 10%;
`;

export default function AddDescription({ onSubmit, onChange }) {
  return (
    <StyledForm onSubmit={onSubmit}>
      <label>
        Step:
        <StyledInput onChange={onChange} />
      </label>
      <button>Add Step</button>
    </StyledForm>
  );
}
