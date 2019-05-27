import React from "react";
import styled from "styled-components";
import BookIcon from "./icons/BookIcon";

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.div`
  background: #ffffff;
  box-shadow: 4px 3px 9px 0 rgba(0, 0, 0, 0.5);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function BookButton() {
  return (
    <Flex>
      <StyledButton>
        <BookIcon />
      </StyledButton>
    </Flex>
  );
}
