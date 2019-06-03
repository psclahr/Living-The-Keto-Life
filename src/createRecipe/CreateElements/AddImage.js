import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

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

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

export default function AddImage() {
  const [image, setImage] = useState("");

  const StyledImage = styled.div`
    background-image: url(${image});
    width: 150px;
    height: 150px;
    background-size: 150px;
    background-position: center center;
    background-repeat: no-repeat;
  `;

  function upload(event) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`;

    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    formData.append("upload_preset", PRESET);

    axios
      .post(url, formData, {
        headers: {
          "Content-type": "multipart/form-data"
        }
      })
      .then(onImageSave)
      .catch(err => console.error(err));
  }

  function onImageSave(response) {
    setImage(response.data.url);
    console.log(response.data.url);
  }

  return (
    <Flex image={image}>
      {image ? (
        <StyledImage />
      ) : (
        <StyledImageContainer>
          <input type="file" name="file" onChange={upload} />
        </StyledImageContainer>
      )}
    </Flex>
  );
}
