export function getRecipes() {
  return fetch("/recipes").then(res => res.json());
}

export function postRecipe(data) {
  return fetchRecipe("POST", data);
}

export const fetchIngredient = data => [
  {
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
  }
];

function fetchRecipe(method, data, id = "") {
  return fetch("/recipes/" + id, {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}
