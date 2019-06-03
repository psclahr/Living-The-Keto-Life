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
    width: 150px;
    height: 150px;
    background-size: 150px;
    background-position: center center;
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
