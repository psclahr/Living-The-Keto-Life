import React from "react";
import styled from "styled-components";

const Flex = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImageContainer = styled.div`
  background-color: white;
  width: 150px;
  height: 150px;
  border: 1px solid lightblue;
`;

export default function AddImage({ image, onChangeImageUpload }) {
  const StyledImage = styled.div`
    background-image: url(${image});
    background-size: 275px;
    width: 150px;
    height: 150px;
    background-position: center;
    background-repeat: no-repeat;
  `;

  return (
    <Flex image={image}>
      {image ? (
        <StyledImage />
      ) : (
        <StyledImageContainer>
          <input type="file" name="file" onChange={onChangeImageUpload} />
        </StyledImageContainer>
      )}
    </Flex>
  );
}
