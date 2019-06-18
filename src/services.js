import axios from "axios";

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

export function getRecipes() {
  return fetch("/recipelist").then(res => res.json());
}

export function postRecipe(data) {
  return fetchRecipe("POST", data);
}

export function patchRecipe(data, id) {
  return fetchRecipe("PATCH", data, id);
}

export function deleteRecipe(id) {
  return fetch("/recipes/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });
}

export function uploadImage(event) {
  const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`;

  const formData = new FormData();
  formData.append("file", event.target.files[0]);
  formData.append("upload_preset", PRESET);

  return axios
    .post(url, formData, {
      headers: {
        "Content-type": "multipart/form-data"
      }
    })
    .then(res => res.data.url);
}

function fetchRecipe(method, data, id = "") {
  return fetch("/recipes/" + id, {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}
