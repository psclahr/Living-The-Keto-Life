import React from "react";
import styled from "styled-components";

const Flex = styled.section`
  display: flex;
  justify-content: center;
`;
const StyledInputTitle = styled.input`
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 2px solid rgba(120, 218, 172, 0.3);
  height: 25px;
  width: 90%;
  transition: all 1s ease;

  &:focus {
    outline: none;
    border-color: rgba(120, 218, 172, 1);
  }
`;

export default function AddTitle({ onChange, value }) {
  return (
    <Flex>
      <StyledInputTitle
        value={value}
        type="text"
        maxLength="45"
        placeholder="Title..."
        onChange={onChange}
        autoFocus
        required
      />
    </Flex>
  );
}
