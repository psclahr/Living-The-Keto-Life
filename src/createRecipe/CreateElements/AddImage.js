import React from "react";
import styled from "styled-components";

const Flex = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

export default function AddImage() {
  return (
    <Flex>
      <StyledImage>Click here to upload a photo</StyledImage>
    </Flex>
  );
}
