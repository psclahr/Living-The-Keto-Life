import React from "react";
import BookIcon from "./icons/BookIcon";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function BookButton() {
  return (
    <Flex>
      <BookIcon />
    </Flex>
  );
}
