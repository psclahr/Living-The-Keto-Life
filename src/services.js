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

export function nutritionQuery(amount, unit, ingredientValue) {
  return fetch(
    `https://api.edamam.com/api/nutrition-data?app_id=4bb611c5&app_key=8b9a2b559e7693bf21f151e736db51cc&ingr=${amount}%20${unit}%20${ingredientValue}`
  ).then(res => res.json());
}

export function settingNutritions(amount, unit, ingredientValue, data) {
  const recipeSchema = {
    amount,
    unit,
    name: ingredientValue,
    calories: data.totalNutrients.ENERC_KCAL
      ? data.totalNutrients.ENERC_KCAL.quantity
      : 0,
    proteins: data.totalNutrients.PROCNT
      ? data.totalNutrients.PROCNT.quantity
      : 0,
    carbs: data.totalNutrients.CHOCDF ? data.totalNutrients.CHOCDF.quantity : 0,
    fats: data.totalNutrients.FAT ? data.totalNutrients.FAT.quantity : 0,
    fatsDivided: {
      saturatedFats: data.totalNutrients.FASAT
        ? data.totalNutrients.FASAT.quantity
        : 0,
      monounsaturatedFats: data.totalNutrients.FAMS
        ? data.totalNutrients.FAMS.quantity
        : 0,
      polyunsaturatedFats: data.totalNutrients.FAPU
        ? data.totalNutrients.FAPU.quantity
        : 0
    }
  };
  return recipeSchema;
}

export function searchForIngredients(ingredientValue) {
  return fetch(
    `https://api.edamam.com/auto-complete?q=${ingredientValue}&limit=10&app_id=$702bbe7d&app_key=7470d6e6a4439eb58cae84ec6ebc10a7`
  ).then(res => res.json());
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
