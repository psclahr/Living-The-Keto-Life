import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

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

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

export default function AddImage() {
  const [image, setImage] = useState("");

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
  }

  return (
    <Flex>
      <StyledImage>
        {image ? (
          <img src={image} alt="" />
        ) : (
          <input type="file" name="file" onChange={upload} />
        )}
      </StyledImage>
    </Flex>
  );
}
