export function getRecipes() {
  return fetch("/recipes").then(res => res.json());
}

export function postRecipe(data) {
  return fetchRecipe("POST", data);
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
