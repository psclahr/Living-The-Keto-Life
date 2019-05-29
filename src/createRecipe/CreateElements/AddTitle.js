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
  border-bottom: 2px solid lightblue;
  height: 20px;
  width: 90%;
  transition: all 1s ease;

  &:focus {
    outline: none;
    border-color: hotpink;
  }
`;

export default function AddTitle({ value }) {
  return (
    <Flex>
      <StyledInputTitle
        placeholder="Give us a recipe title..."
        required
        value={value}
      />
    </Flex>
  );
}
