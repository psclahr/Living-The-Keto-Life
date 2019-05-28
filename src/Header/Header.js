import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h1`
  font-size: 22px;
  font-family: sans-serif;
`;

const Line = styled.div`
  width: 90%;
  height: 1px;
  margin-top: 3px;
  background: black;
`;
const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Flex>Living The Keto Life</Flex>
      <Flex>
        <Line />
      </Flex>
    </StyledHeader>
  );
}
