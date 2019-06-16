import React from "react";
import styled from "styled-components";

const Flex = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  border: 1px solid rgba(120, 218, 172, 0.3);
  border-radius: 10px;
  width: 90%;
  height: 187px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImageLabel = styled.label`
  background: linear-gradient(90deg, rgb(214, 232, 117), rgb(120, 218, 172));
  border-radius: 25px;
  padding: 7px;
`;

const StyledImageInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export default function AddImage({ image, onChangeImageUpload }) {
  const StyledImage = styled.div`
    background-image: url(${image});
    background-size: 100%;
    width: 90%;
    height: 187px;
    background-position: center;
    background-repeat: no-repeat;
    border: 1px solid rgba(120, 218, 172, 0.3);
    border-radius: 10px;
  `;

  return (
    <Flex image={image}>
      {image ? (
        <StyledImage />
      ) : (
        <Container>
          <StyledImageLabel htmlFor="file">
            Add Image
            <StyledImageInput
              type="file"
              name="file"
              id="file"
              onChange={onChangeImageUpload}
            />
          </StyledImageLabel>
        </Container>
      )}
    </Flex>
  );
}
