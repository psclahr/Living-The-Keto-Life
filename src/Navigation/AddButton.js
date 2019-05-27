import React from "react";
import styled from "styled-components";
import AddIcon from "./icons/AddIcon";

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function AddButton() {
  return (
    <Flex>
      <AddIcon />
    </Flex>
  );
}
